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
  Sparkles,
} from "lucide-react";
import { useState } from "react";

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
    const themes: Array<"light" | "dark" | "beige"> = ["light", "dark", "beige"];
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
              {(theme as string) === "beige" && <Palette size={18} />}
            </button>
            <Button className="hidden sm:inline-flex">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        ref={heroRef.ref as React.RefObject<HTMLElement>}
        className={`py-32 md:py-48 border-b border-border transition-opacity duration-600 ${
          heroRef.isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container max-w-3xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full">
            <Sparkles size={16} className="text-accent animate-pulse" />
            <span className="text-sm font-medium">AI-powered email, zero cost</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-light leading-tight mb-6">
            Your email, organized by AI.
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-xl mx-auto">
            Bring your own AI. Pay pennies, not dollars.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="animate-float">
              Add to Chrome
            </Button>
            <Button size="lg" variant="outline">
              Learn more
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Open source · No credit card · Your data stays yours
          </p>

          {/* Wow Factor: Animated gradient background */}
          <div className="mt-20 relative h-64 rounded-lg overflow-hidden glass">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-accent/10 animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-muted-foreground">Product demo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 border-b border-border bg-secondary/30">
        <div className="container">
          <p className="text-xs text-muted-foreground mb-6 uppercase tracking-wide">Built with</p>
          <div className="flex flex-wrap gap-8 items-center">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-muted rounded-sm"></div>
              <span className="text-sm font-medium">Groq</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-muted rounded-sm"></div>
              <span className="text-sm font-medium">OpenRouter</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-muted rounded-sm"></div>
              <span className="text-sm font-medium">Ollama</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        ref={pricingRef.ref as React.RefObject<HTMLElement>}
        id="pricing"
        className={`py-20 border-b border-border transition-opacity duration-600 ${
          pricingRef.isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-light mb-12 text-center">Simple pricing</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-border rounded-lg p-8">
              <h3 className="text-lg font-medium mb-2">Superhuman</h3>
              <p className="text-3xl font-light mb-6">$30<span className="text-lg text-muted-foreground">/mo</span></p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-muted-foreground" />
                  AI sorting
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-muted-foreground" />
                  Shortcuts
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-muted-foreground" />
                  Smart labels
                </li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-8">
              <h3 className="text-lg font-medium mb-2">Shortwave</h3>
              <p className="text-3xl font-light mb-6">$24<span className="text-lg text-muted-foreground">/mo</span></p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-muted-foreground" />
                  AI sorting
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-muted-foreground" />
                  Shortcuts
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-muted-foreground" />
                  Smart labels
                </li>
              </ul>
            </div>

            <div className="border-2 border-accent rounded-lg p-8 glass">
              <h3 className="text-lg font-medium mb-2">eorg</h3>
              <p className="text-3xl font-light mb-6 text-accent">Free</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-accent" />
                  AI sorting
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-accent" />
                  Shortcuts
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-accent" />
                  Smart labels
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        ref={featuresRef.ref as React.RefObject<HTMLElement>}
        id="features"
        className={`py-20 border-b border-border transition-opacity duration-600 ${
          featuresRef.isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-light mb-12 text-center">Why eorg</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass p-8 rounded-lg">
              <Brain size={24} className="text-accent mb-4" />
              <h3 className="text-lg font-medium mb-2">AI-Powered</h3>
              <p className="text-sm text-muted-foreground">Auto-labels, sorting, smart categorization.</p>
            </div>

            <div className="glass p-8 rounded-lg">
              <Zap size={24} className="text-accent mb-4" />
              <h3 className="text-lg font-medium mb-2">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground">Keyboard shortcuts, instant search, zero bloat.</p>
            </div>

            <div className="glass p-8 rounded-lg">
              <Key size={24} className="text-accent mb-4" />
              <h3 className="text-lg font-medium mb-2">Your AI</h3>
              <p className="text-sm text-muted-foreground">Groq, OpenRouter, or Ollama. You control it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        ref={howItWorksRef.ref as React.RefObject<HTMLElement>}
        className={`py-20 border-b border-border transition-opacity duration-600 ${
          howItWorksRef.isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container max-w-2xl">
          <h2 className="text-4xl font-light mb-12 text-center">How it works</h2>

          <div className="space-y-6">
            {[
              { step: 1, title: "Install", desc: "Add to Chrome in seconds" },
              { step: 2, title: "Connect", desc: "Link your Gmail account" },
              { step: 3, title: "Configure", desc: "Add your AI API key" },
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-medium">
                    {item.step}
                  </div>
                  {item.step < 3 && <div className="w-0.5 h-12 bg-border mt-2"></div>}
                </div>
                <div className="pb-6">
                  <h3 className="text-lg font-medium mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        ref={faqRef.ref as React.RefObject<HTMLElement>}
        className={`py-20 border-b border-border transition-opacity duration-600 ${
          faqRef.isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container max-w-2xl">
          <h2 className="text-4xl font-light mb-12 text-center">Questions</h2>

          <div className="space-y-3">
            {[
              { q: "Is it really free?", a: "Yes. You pay for AI tokens—usually cents per day." },
              { q: "Is my data safe?", a: "Completely. API keys stay local, code is open source." },
              { q: "How is this different?", a: "Same features as Superhuman, but you bring your own AI." },
              { q: "Which AI works?", a: "Groq, OpenRouter, Ollama, or any model you can run." },
              { q: "Is it technical?", a: "No. Setup takes 2 minutes." },
            ].map((item, idx) => (
              <div key={idx} className="border border-border rounded-lg overflow-hidden glass">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-secondary/50 transition-colors text-left"
                >
                  <span className="font-medium text-sm">{item.q}</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${expandedFaq === idx ? "rotate-180" : ""}`}
                  />
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 py-4 bg-secondary/30 border-t border-border text-sm text-muted-foreground">
                    {item.a}
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
          <h2 className="text-4xl font-light mb-8">Ready?</h2>
          <Button size="lg" className="animate-float">
            Get started free
          </Button>
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
            © 2026 eorg. MIT License.
          </div>
        </div>
      </footer>
    </div>
  );
}
