"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Inbox } from "lucide-react";
import { useEffect, useState, useRef, useCallback } from "react";

const LABELS = [
  { id: "important", name: "Important", color: "bg-red-500/90 text-white", border: "border-red-400/50" },
  { id: "unimportant", name: "Unimportant", color: "bg-zinc-500/80 text-white", border: "border-zinc-400/50" },
  { id: "fyi", name: "FYI", color: "bg-blue-500/90 text-white", border: "border-blue-400/50" },
] as const;

type LabelId = (typeof LABELS)[number]["id"];

const FAKE_SUBJECTS = [
  "Re: Project timeline update",
  "Weekly digest — 3 new updates",
  "Your order has shipped",
  "Meeting tomorrow 10am",
  "Newsletter: Tips for this week",
  "Reminder: Payment due",
  "Team sync notes",
];

const FAKE_PREVIEWS = [
  "Thanks for sending this over. I've reviewed and…",
  "Here’s what you might have missed in the last…",
  "Track your package with the link below…",
  "Please confirm your attendance by…",
  "We’ve rounded up the best reads for…",
  "This is a friendly reminder that your…",
  "Summary of action items and next steps…",
];

interface EmailItem {
  id: number;
  subject: string;
  preview: string;
  label: LabelId | null;
  labelVisible: boolean;
}

function getRandomLabel(): LabelId {
  return LABELS[Math.floor(Math.random() * LABELS.length)].id;
}

function getRandomPair(): { subject: string; preview: string } {
  const i = Math.floor(Math.random() * FAKE_SUBJECTS.length);
  const j = Math.floor(Math.random() * FAKE_PREVIEWS.length);
  return { subject: FAKE_SUBJECTS[i], preview: FAKE_PREVIEWS[j] };
}

export default function InboxDemo() {
  const [emails, setEmails] = useState<EmailItem[]>([]);
  const nextIdRef = useRef(0);

  const addEmail = useCallback(() => {
    const id = nextIdRef.current;
    nextIdRef.current += 1;
    const { subject, preview } = getRandomPair();
    const label = getRandomLabel();
    setEmails((prev) => {
      const rest = prev.slice(0, 4);
      return [{ id, subject, preview, label, labelVisible: false }, ...rest];
    });
    setTimeout(() => {
      setEmails((prev) =>
        prev.map((e) => (e.id === id ? { ...e, labelVisible: true } : e))
      );
    }, 1400);
  }, []);

  // Seed 2 emails immediately so the inbox never looks empty
  useEffect(() => {
    addEmail();
    addEmail();
  }, []);

  useEffect(() => {
    const t1 = setTimeout(addEmail, 2200);
    const t2 = setTimeout(addEmail, 4400);
    const t3 = setTimeout(addEmail, 6600);
    const loop = setInterval(addEmail, 9000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearInterval(loop);
    };
  }, [addEmail]);

  const labelMap = Object.fromEntries(LABELS.map((l) => [l.id, l]));

  return (
    <div className="w-full max-w-[300px] min-h-[260px] max-h-[calc(100vh-12rem)] rounded-2xl inbox-glass border border-border overflow-hidden shadow-xl flex flex-col">
      <div className="px-3 py-2 border-b border-border flex items-center gap-2 shrink-0">
        <Inbox className="w-4 h-4 text-accent" />
        <span className="text-sm font-medium">Inbox</span>
      </div>
      <div className="p-2 space-y-1.5 flex-1 min-h-[180px] overflow-hidden overflow-y-auto">
        <AnimatePresence mode="popLayout">
          {emails.map((email, index) => (
            <motion.div
              key={email.id}
              layout
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="rounded-xl border border-border bg-card/80 p-3 text-left"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium text-foreground/90 truncate select-none blur-[2px]">
                    {email.subject}
                  </p>
                  <p className="text-[11px] text-muted-foreground mt-0.5 truncate select-none blur-[1px]">
                    {email.preview}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-1">
                  {!email.labelVisible ? (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="rounded-md bg-muted/80 text-muted-foreground px-2 py-0.5 text-[10px] font-medium"
                    >
                      Untriaged
                    </motion.span>
                  ) : (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 28 }}
                      className={`rounded-md px-2 py-0.5 text-[10px] font-medium border ${labelMap[email.label].color} ${labelMap[email.label].border}`}
                    >
                      {labelMap[email.label].name}
                    </motion.span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
