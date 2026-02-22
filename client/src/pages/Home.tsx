import { Moon, Sun } from "lucide-react";
import InboxDemo from "@/components/InboxDemo";
import { useTheme } from "@/contexts/ThemeContext";

const CHROME_STORE_URL = "https://github.com/aarohkandy/eorg";
const GITHUB_URL = "https://github.com/aarohkandy/eorg";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Nav */}
      <nav className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-10">
        <div className="container flex items-center justify-between h-14">
          <span className="text-base font-semibold tracking-tight">eorg</span>

          <div className="flex items-center gap-6">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <button
              onClick={() => setTheme?.(theme === "dark" ? "light" : "dark")}
              className="w-8 h-8 flex items-center justify-center rounded-md border border-border hover:bg-secondary transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun size={15} className="text-foreground" />
              ) : (
                <Moon size={15} className="text-foreground" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <main className="flex-1 flex items-center">
        <div className="container py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: copy */}
            <div className="fade-up">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-4">
                Open source · Chrome extension
              </p>
              <h1 className="text-4xl lg:text-5xl font-semibold leading-[1.15] mb-5">
                Your inbox,<br />sorted automatically.
              </h1>
              <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-sm">
                eorg connects to Gmail and uses your own AI key to label and organise every email as it arrives. Pay pennies, not subscriptions.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 fade-up fade-up-delay-1">
                <a
                  href={CHROME_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-md bg-foreground text-background text-sm font-medium hover:opacity-85 transition-opacity"
                >
                  Add to Chrome
                </a>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-md border border-border text-sm font-medium hover:bg-secondary transition-colors"
                >
                  View source
                </a>
              </div>

              <p className="mt-5 text-xs text-muted-foreground fade-up fade-up-delay-2">
                Free to use · Your data never leaves your browser · MIT licence
              </p>
            </div>

            {/* Right: live demo */}
            <div className="flex justify-center lg:justify-end fade-up fade-up-delay-2">
              <div className="w-full max-w-[300px]">
                <InboxDemo />
                <p className="text-xs text-muted-foreground text-center mt-3">
                  Live demo — labels applied by AI in real time
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* How it works */}
      <section className="border-t border-border py-16">
        <div className="container">
          <h2 className="text-xl font-semibold mb-10 fade-up">How it works</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Install the extension",
                body: "Add eorg to Chrome from the Web Store. It takes under a minute.",
              },
              {
                step: "2",
                title: "Connect your AI key",
                body: "Paste in your OpenAI or Gemini API key. eorg calls the model directly — no middleman.",
              },
              {
                step: "3",
                title: "Watch your inbox organise",
                body: "Every incoming email gets a label automatically. Important, FYI, Newsletter — you decide the rules.",
              },
            ].map(({ step, title, body }) => (
              <div key={step} className="fade-up">
                <div className="text-xs font-medium text-muted-foreground mb-3">
                  Step {step}
                </div>
                <h3 className="text-base font-semibold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-6">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-sm text-muted-foreground">
            eorg — open source email organiser
          </span>
          <div className="flex items-center gap-5">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href={`${GITHUB_URL}/blob/main/LICENSE`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              MIT Licence
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
