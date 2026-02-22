import { motion, AnimatePresence } from "framer-motion";
import { Inbox } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const LABELS = [
  { id: "important", name: "Important", className: "bg-red-100 text-red-700 border border-red-200" },
  { id: "newsletter", name: "Newsletter", className: "bg-zinc-100 text-zinc-600 border border-zinc-200" },
  { id: "fyi", name: "FYI", className: "bg-blue-100 text-blue-700 border border-blue-200" },
] as const;

type LabelId = (typeof LABELS)[number]["id"];

const SUBJECTS = [
  "Re: Project timeline update",
  "Weekly digest — 3 new updates",
  "Your order has shipped",
  "Meeting tomorrow at 10am",
  "Reminder: Payment due Friday",
  "Team sync notes",
  "Invitation: Design review",
  "Action required: Confirm your email",
  "Re: Budget approval",
  "Your receipt from Stripe",
  "Heads up: server maintenance tonight",
  "Quarterly report attached",
];

const PREVIEWS = [
  "Thanks for sending this over. I've reviewed…",
  "Here's what you might have missed this week…",
  "Track your package with the link below…",
  "Please confirm your attendance by end of day…",
  "This is a friendly reminder that your invoice…",
  "Summary of action items and next steps…",
  "You're invited to join the design review call…",
  "Please verify your email address to continue…",
  "The finance team has approved the Q3 budget…",
  "A payment of $49.00 was processed on…",
  "We'll be performing scheduled maintenance…",
  "Please find the Q3 report attached for review…",
];

interface EmailItem {
  id: number;
  subject: string;
  preview: string;
  label: LabelId;
  labeled: boolean;
}

function randomLabel(): LabelId {
  return LABELS[Math.floor(Math.random() * LABELS.length)].id;
}

function randomPair() {
  const i = Math.floor(Math.random() * SUBJECTS.length);
  const j = Math.floor(Math.random() * PREVIEWS.length);
  return { subject: SUBJECTS[i], preview: PREVIEWS[j] };
}

function randMs(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Keep at most this many emails in state (more than visible so scroll works)
const MAX_EMAILS = 20;

export default function InboxDemo() {
  const [emails, setEmails] = useState<EmailItem[]>([]);
  const nextId = useRef(0);
  const loopRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const addEmail = useCallback(() => {
    const id = nextId.current++;
    const { subject, preview } = randomPair();
    const label = randomLabel();

    setEmails((prev) => [
      { id, subject, preview, label, labeled: false },
      ...prev.slice(0, MAX_EMAILS - 1),
    ]);

    // Scroll to top so the new email is visible
    if (listRef.current) {
      listRef.current.scrollTop = 0;
    }

    setTimeout(() => {
      setEmails((prev) =>
        prev.map((e) => (e.id === id ? { ...e, labeled: true } : e))
      );
    }, randMs(900, 1400));
  }, []);

  const scheduleNext = useCallback(() => {
    const delay = randMs(1800, 3800);
    loopRef.current = setTimeout(() => {
      addEmail();
      scheduleNext();
    }, delay);
  }, [addEmail]);

  useEffect(() => {
    // Seed 5 pre-labeled emails so the inbox looks full immediately
    const seed: EmailItem[] = Array.from({ length: 5 }, (_, i) => {
      const { subject, preview } = randomPair();
      return { id: nextId.current++, subject, preview, label: randomLabel(), labeled: true };
    });
    setEmails(seed);
    scheduleNext();
    return () => {
      if (loopRef.current) clearTimeout(loopRef.current);
    };
  }, []);

  const labelMap = Object.fromEntries(LABELS.map((l) => [l.id, l]));

  return (
    <div className="inbox-card w-full max-w-[320px] flex flex-col" style={{ height: 380 }}>
      {/* Header */}
      <div className="px-3 py-2.5 border-b border-border flex items-center gap-2 shrink-0">
        <Inbox className="w-4 h-4 text-muted-foreground" />
        <span className="text-sm font-medium">Inbox</span>
      </div>

      {/* Scrollable email list — fixed height, overflows naturally */}
      <div
        ref={listRef}
        className="flex-1 overflow-y-auto no-scrollbar p-2 space-y-1.5"
        style={{ scrollBehavior: "smooth", scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {emails.map((email) => (
            <motion.div
              key={email.id}
              layout
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, height: 0, marginBottom: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="rounded-md border border-border bg-card p-2.5 shrink-0"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium text-foreground truncate blur-[2px] select-none">
                    {email.subject}
                  </p>
                  <p className="text-[11px] text-muted-foreground mt-0.5 truncate blur-[1.5px] select-none">
                    {email.preview}
                  </p>
                </div>
                <div className="shrink-0">
                  <AnimatePresence mode="wait">
                    {email.labeled ? (
                      <motion.span
                        key="label"
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.15 }}
                        className={`inline-block rounded px-1.5 py-0.5 text-[10px] font-medium ${labelMap[email.label].className}`}
                      >
                        {labelMap[email.label].name}
                      </motion.span>
                    ) : (
                      <motion.span
                        key="pending"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="inline-block rounded px-1.5 py-0.5 text-[10px] font-medium bg-muted text-muted-foreground border border-border"
                      >
                        Sorting…
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
