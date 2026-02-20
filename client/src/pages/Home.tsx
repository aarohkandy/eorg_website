import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Brain,
  Zap,
  Key,
  Github,
  Twitter,
  MessageCircle,
  ChevronDown,
  Check,
  Moon,
  Sun,
  Palette,
} from "lucide-react";
import { useState } from "react";

/**
 * eorg Landing Page - Minimalist Editorial Design
 * Design Philosophy: Typography-first, radical simplicity, generous whitespace
 * No emojis, no gradients, intentional restraint
 */

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const heroRef = useScrollAnimation();
  const pricingRef = useScrollAnimation();
  const featuresRef = useScrollAnimation();
  const howItWorksRef = useScrollAnimation();
  const faqRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();

  const toggleTheme = () => {
    const themes: Array<"light" | "dark" | "warm"> = ["light", "dark", "warm"];
    const currentIndex = themes.indexOf(theme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    if (setTheme) {
      setTheme(nextTheme);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <div className="text-lg font-semibold tracking-tight">eorg</div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm hover:text-accent transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-sm hover:text-accent transition-colors">
              Pricing
            </a>
            <a
              href="https://github.com/aarohkandy/eorg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-accent transition-colors"
            >
              GitHub
            </a>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-secondary rounded transition-colors"
              title="Toggle theme"
            >
            {theme === "light" && <Moon size={18} />}
            {theme === "dark" && <Sun size={18} />}
            {(theme as string) === "warm" && <Palette size={18} />}
            </button>
            <Button className="hidden sm:inline-flex">Get Started Free</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        ref={heroRef.ref as React.RefObject<HTMLElement>}
        className={`py-20 md:py-32 border-b border-border transition-opacity duration-600 ${
          heroRef.isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container max-w-2xl">
          <div className="mb-8">
            <div className="divider-accent mb-6"></div>
            <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6">
              Your email, organized by AI. Not your wallet.
            </h1>
          </div>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            The power of Superhuman. The price of free. Bring your own AI — Groq, OpenRouter, or
            Ollama.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button size="lg" className="w-full sm:w-auto">
              Add to Chrome — it's free
            </Button>
          </div>
          <div className="text-sm text-muted-foreground space-y-2">
            <p>Open source · No credit card · Your data stays yours</p>
          </div>

          {/* Placeholder for screenshot */}
          <div className="mt-16 pt-16 border-t border-border">
            <div className="aspect-video bg-secondary rounded-sm border border-border flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Product screenshot / GIF</span>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Strip */}
      <section className="py-12 border-b border-border bg-secondary/30">
        <div className="container">
          <p className="text-sm text-muted-foreground mb-6">Built with</p>
          <div className="flex flex-wrap gap-6 items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-muted rounded-sm"></div>
              <span className="text-sm font-medium">Groq</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-muted rounded-sm"></div>
              <span className="text-sm font-medium">OpenRouter</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-muted rounded-sm"></div>
              <span className="text-sm font-medium">Ollama</span>
            </div>
            <div className="ml-auto">
              <a
                href="https://github.com/aarohkandy/eorg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:text-accent/80 transition-colors flex items-center gap-2"
              >
                <Github size={16} />
                GitHub Stars
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section
        ref={pricingRef.ref as React.RefObject<HTMLElement>}
        id="pricing"
        className={`py-20 border-b border-border transition-opacity duration-600 ${
          pricingRef.isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container max-w-4xl">
          <div className="mb-12">
            <div className="divider-accent mb-6"></div>
            <h2 className="text-4xl font-light leading-tight">
              AI email tools shouldn't cost more than your coffee habit.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Superhuman */}
            <div className="border border-border rounded-sm p-8">
              <h3 className="text-lg font-medium mb-2">Superhuman</h3>
              <p className="text-3xl font-light mb-6">$30<span className="text-lg text-muted-foreground">/mo</span></p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <Check size={16} className="mt-0.5 text-muted-foreground flex-shrink-0" />
                  <span>AI sorting</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={16} className="mt-0.5 text-muted-foreground flex-shrink-0" />
                  <span>Keyboard shortcuts</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={16} className="mt-0.5 text-muted-foreground flex-shrink-0" />
                  <span>Smart labels</span>
                </li>
              </ul>
            </div>

            {/* Shortwave */}
            <div className="border border-border rounded-sm p-8">
              <h3 className="text-lg font-medium mb-2">Shortwave</h3>
              <p className="text-3xl font-light mb-6">$24<span className="text-lg text-muted-foreground">/mo</span></p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <Check size={16} className="mt-0.5 text-muted-foreground flex-shrink-0" />
                  <span>AI sorting</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={16} className="mt-0.5 text-muted-foreground flex-shrink-0" />
                  <span>Keyboard shortcuts</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={16} className="mt-0.5 text-muted-foreground flex-shrink-0" />
                  <span>Smart labels</span>
                </li>
              </ul>
            </div>

            {/* eorg - Highlighted */}
            <div className="border-2 border-accent rounded-sm p-8 bg-accent/5">
              <h3 className="text-lg font-medium mb-2">eorg</h3>
              <p className="text-3xl font-light mb-6 text-accent">Free</p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <Check size={16} className="mt-0.5 text-accent flex-shrink-0" />
                  <span>AI sorting</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={16} className="mt-0.5 text-accent flex-shrink-0" />
                  <span>Keyboard shortcuts</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={16} className="mt-0.5 text-accent flex-shrink-0" />
                  <span>Smart labels</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        ref={featuresRef.ref as React.RefObject<HTMLElement>}
        id="features"
        className={`py-20 border-b border-border transition-opacity duration-600 ${
          featuresRef.isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container max-w-4xl">
          <div className="mb-12">
            <div className="divider-accent mb-6"></div>
            <h2 className="text-4xl font-light leading-tight mb-2">Everything you need</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Brain size={24} className="text-accent" />
                <h3 className="text-lg font-medium">AI-Powered Organization</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Auto-labels, priority sorting, smart categorization. Your inbox makes sense without
                you lifting a finger.
              </p>
            </div>

            {/* Feature 2 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Zap size={24} className="text-accent" />
                <h3 className="text-lg font-medium">Lightning Fast</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Keyboard shortcuts, instant search, zero bloat. Feels like the premium tools because
                it is one.
              </p>
            </div>

            {/* Feature 3 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Key size={24} className="text-accent" />
                <h3 className="text-lg font-medium">Bring Your Own AI</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Use Groq, OpenRouter, or Ollama. You control cost, privacy, and which model runs
                your inbox. Pennies per day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        ref={howItWorksRef.ref as React.RefObject<HTMLElement>}
        className={`py-20 border-b border-border transition-opacity duration-600 ${
          howItWorksRef.isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container max-w-4xl">
          <div className="mb-12">
            <div className="divider-accent mb-6"></div>
            <h2 className="text-4xl font-light leading-tight">How it works</h2>
          </div>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-medium">
                  1
                </div>
                <div className="w-0.5 h-12 bg-border mt-2"></div>
              </div>
              <div className="pb-8">
                <h3 className="text-lg font-medium mb-2">Install the extension</h3>
                <p className="text-sm text-muted-foreground">
                  Add eorg to Chrome in seconds. No setup required yet.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-medium">
                  2
                </div>
                <div className="w-0.5 h-12 bg-border mt-2"></div>
              </div>
              <div className="pb-8">
                <h3 className="text-lg font-medium mb-2">Connect your Gmail</h3>
                <p className="text-sm text-muted-foreground">
                  Authorize eorg to access your inbox. Your data stays in Gmail.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-medium">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Add your AI key</h3>
                <p className="text-sm text-muted-foreground">
                  Paste your Groq, OpenRouter, or Ollama API key. Costs pennies per day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        ref={faqRef.ref as React.RefObject<HTMLElement>}
        className={`py-20 border-b border-border transition-opacity duration-600 ${
          faqRef.isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container max-w-2xl">
          <div className="mb-12">
            <div className="divider-accent mb-6"></div>
            <h2 className="text-4xl font-light leading-tight">Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Is it really free?",
                a: "Yes. You pay for your own AI tokens — usually a few cents per day. The app itself is free forever.",
              },
              {
                q: "Is my email data safe?",
                a: "Completely. Your API keys stay local, your emails stay in Gmail, and the code is fully open source.",
              },
              {
                q: "How is this different from Superhuman?",
                a: "Same AI-powered features — organization, shortcuts, smart labels. The difference is you bring your own AI instead of paying $30/month for theirs.",
              },
              {
                q: "What AI providers work?",
                a: "Groq, OpenRouter, and Ollama. If you can run a model, you can use it.",
              },
              {
                q: "Do I need to be technical?",
                a: "No. Setup takes 2 minutes. We'll walk you through getting an API key.",
              },
            ].map((item, idx) => (
              <div key={idx} className="border border-border rounded-sm overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-secondary/50 transition-colors text-left"
                >
                  <span className="font-medium">{item.q}</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${expandedFaq === idx ? "rotate-180" : ""}`}
                  />
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 py-4 bg-secondary/30 border-t border-border">
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        ref={ctaRef.ref as React.RefObject<HTMLElement>}
        className={`py-20 border-b border-border transition-opacity duration-600 ${
          ctaRef.isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container max-w-2xl text-center">
          <h2 className="text-4xl font-light leading-tight mb-6">Stop overpaying for email.</h2>
          <Button size="lg">Get started — it's free</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-secondary/30 border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            <div className="text-sm text-muted-foreground">Built by Aaroh Kandy</div>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/aarohkandy/eorg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Github size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-xs text-muted-foreground text-center">
            © 2026 eorg. Open source. MIT License.
          </div>
        </div>
      </footer>
    </div>
  );
}
