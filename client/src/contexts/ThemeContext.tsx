import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "warm";

interface ThemeContextType {
  theme: Theme;
  toggleTheme?: () => void;
  setTheme?: (theme: Theme) => void;
  switchable: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  switchable?: boolean;
}

export function ThemeProvider({
  children,
  defaultTheme = "light",
  switchable = false,
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (switchable) {
      const stored = localStorage.getItem("theme");
      return (stored as Theme) || defaultTheme;
    }
    return defaultTheme;
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark", "warm");
    if (theme === "dark") {
      root.classList.add("dark");
    } else if (theme === "warm") {
      root.classList.add("warm");
    }

    if (switchable) {
      localStorage.setItem("theme", theme);
    }
  }, [theme, switchable]);

  const toggleTheme = switchable
    ? () => {
        const themes: Theme[] = ["light", "dark", "warm"];
        const currentIndex = themes.indexOf(theme);
        const nextTheme = themes[(currentIndex + 1) % themes.length];
        setTheme(nextTheme);
      }
    : undefined;

  const handleSetTheme = switchable ? setTheme : undefined;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme: handleSetTheme, switchable }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
