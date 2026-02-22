import { Moon, Sun } from "lucide-react";
import InboxDemo from "@/components/InboxDemo";
import { useTheme } from "@/contexts/ThemeContext";

// TODO: replace with Chrome Web Store URL when extension is published
const CTA_URL = "https://github.com/aarohkandy/eorg";
const GITHUB_URL = "https://github.com/aarohkandy/eorg";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Nav */}
      <nav className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-10">
        <div className="container flex items-center justify-between h-14">
          <span className="text-base font-semibold tracking-tight">Mailita</span>

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
              <h1 className="text-5xl lg:text-6xl font-semibold leading-[1.1] mb-6">
                Your inbox,<br />sorted automatically.
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-md">
                Mailita connects to Gmail and uses your own AI key to label and organise every email as it arrives. Works with Groq and OpenRouter — completely free.
              </p>

              <div className="fade-up fade-up-delay-1">
                <a
                  href={CTA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-12 px-7 rounded-md bg-foreground text-background text-base font-medium hover:opacity-85 transition-opacity"
                >
                  Add to Chrome
                </a>
              </div>

              <p className="mt-5 text-sm text-muted-foreground fade-up fade-up-delay-2">
                Your data never leaves your browser · No subscription
              </p>
            </div>

            {/* Right: live demo */}
            <div className="flex justify-center lg:justify-end fade-up fade-up-delay-2">
              <InboxDemo />
            </div>
          </div>
        </div>
      </main>

      {/* How it works */}
      <section className="border-t border-border py-16">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-10 fade-up">How it works</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Install the extension",
                body: "Add Mailita to Chrome from the Web Store. It takes under a minute.",
              },
              {
                step: "2",
                title: "Connect your AI key",
                body: "Paste in an API key from OpenAI, Groq, or OpenRouter. Mailita calls the model directly — no middleman, no cost.",
              },
              {
                step: "3",
                title: "Watch your inbox organise",
                body: "Every incoming email gets a label automatically. Important, FYI, Newsletter — you decide the rules.",
              },
            ].map(({ step, title, body }) => (
              <div key={step} className="fade-up">
                <div className="text-sm font-medium text-muted-foreground mb-3">
                  Step {step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-6">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-sm text-muted-foreground">Mailita</span>
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
