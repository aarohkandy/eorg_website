import { Button } from "@/components/ui/button";
import InboxDemo from "@/components/InboxDemo";
import { useTheme } from "@/contexts/ThemeContext";
import { Github, Twitter, MessageCircle, Moon, Sun, Palette } from "lucide-react";

const THEMES = [
  { id: "light" as const, label: "Light", icon: Sun },
  { id: "dark" as const, label: "Dark", icon: Moon },
  { id: "beige" as const, label: "Beige", icon: Palette },
] as const;

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="h-screen flex flex-col bg-background text-foreground overflow-hidden">
      {/* Nav – slim */}
      <nav className="shrink-0 glass-nav border-b border-border/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 grid grid-cols-3 min-h-[48px] items-center">
          <div className="text-lg font-semibold tracking-tight">mailita</div>
          <div className="hidden md:flex justify-center items-center gap-8">
            <a href="#" className="text-sm hover:text-accent transition-colors">Features</a>
            <a href="#" className="text-sm hover:text-accent transition-colors">Pricing</a>
            <a href="https://github.com/aarohkandy/eorg" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-accent transition-colors">GitHub</a>
          </div>
          <div className="flex justify-end">
            <div className="flex items-center rounded-2xl border border-border p-1 glass-panel">
              {THEMES.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setTheme?.(id)}
                  title={label}
                  className={`flex items-center justify-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-medium transition-colors ${
                    theme === id
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon size={14} />
                  <span className="hidden sm:inline">{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main: intro + inbox at top, one viewport */}
      <main className="flex-1 min-h-0 flex flex-col">
        {/* Top row: intro left, email sim right */}
        <section className="flex-1 min-h-0 grid lg:grid-cols-[1fr,auto] gap-8 lg:gap-12 items-center px-4 sm:px-6 lg:px-8 py-6 lg:py-8 max-w-5xl mx-auto w-full">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-light leading-tight mb-3">
              Your email, organized by AI.
            </h1>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto lg:mx-0 text-sm md:text-base">
              Bring your own AI. Pay pennies, not dollars.
            </p>
            <div className="flex flex-col items-center gap-3 lg:items-start">
              <Button size="lg" className="hero-cta hero-cta-static font-medium">
                Add to Chrome
              </Button>
              <p className="text-xs text-muted-foreground">
                Open source · No credit card · Your data stays yours
              </p>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end shrink-0">
            <InboxDemo />
          </div>
        </section>
      </main>
    </div>
  );
}
