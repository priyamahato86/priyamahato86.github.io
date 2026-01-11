import { Dot, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "../Data/profile";
export default function Navbar() {
  const [theme, setTheme] = useState<"dark" | "light" | "default">("dark");

  useEffect(() => {
    const saved = localStorage.getItem("site-theme");
    const html = document.documentElement;
    if (saved === "light") {
      html.classList.add("light");
      setTheme("light");
    } else if (saved === "dark") {
      html.classList.add("dark");
      setTheme("dark");
    } else {
      html.classList.remove("light", "dark");
      setTheme("default");
    }
  }, []);

  const handleTheme = (newTheme: "dark" | "light" | "default") => {
    const html = document.documentElement;
    html.classList.remove("light", "dark");
    if (newTheme === "light") {
      html.classList.add("light");
      localStorage.setItem("site-theme", "light");
    } else if (newTheme === "dark") {
      html.classList.add("dark");
      localStorage.setItem("site-theme", "dark");
    } else {
      localStorage.removeItem("site-theme");
    }
    setTheme(newTheme);
  };

  return (
    <header className="relative z-20 bg-theme">
      <nav className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Left side */}
          <div className="flex items-center gap-3">
            {/* Desktop Only: Brand + Location */}
            <div className="hidden sm:flex items-center gap-3">
              <div className="text-lg font-semibold text-theme select-none">
                PM
              </div>
              <div className="text-sm text-muted">{profile.basic.location}</div>
            </div>

            {/* Mobile Only: Availability Badge */}
            <div className="flex sm:hidden items-center gap-2 card-theme rounded-full px-3 py-2 border border-gray-200 dark:border-white/10">
              <Dot className="w-3.5 h-3.5 blink-dot-strong" />
              <span className="text-theme text-xs">Available for work</span>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Desktop Only: Availability Badge */}
            <div className="hidden sm:flex items-center gap-2 card-theme rounded-full px-3 py-2 border border-gray-200 dark:border-white/10">
              <Dot className="w-3.5 h-3.5 blink-dot-strong" />
              <span className="text-sm text-theme">Available for work</span>
            </div>

            {/* Desktop Only: Full Theme Toggle */}
            <div className="hidden sm:flex items-center gap-2 card-theme rounded-full p-1 border border-gray-200 dark:border-white/10">
              <button
                onClick={() => handleTheme("light")}
                aria-pressed={theme === "light"}
                className={`flex items-center justify-center p-2 rounded-full transition-all duration-200 ${theme === "light"
                  ? "bg-[var(--text)] text-[var(--card)]"
                  : "text-muted hover:text-theme"
                  }`}
                aria-label="Switch to light theme"
              >
                <Sun className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleTheme("default")}
                aria-pressed={theme === "default"}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${theme === "default"
                  ? "bg-[var(--text)] text-[var(--card)]"
                  : "text-muted hover:text-theme"
                  }`}
                aria-label="Reset theme to default"
              >
                Default
              </button>

              <button
                onClick={() => handleTheme("dark")}
                aria-pressed={theme === "dark"}
                className={`flex items-center justify-center p-2 rounded-full transition-all duration-200 ${theme === "dark"
                  ? "bg-[var(--text)] text-[var(--card)]"
                  : "text-muted hover:text-theme"
                  }`}
                aria-label="Switch to dark theme"
              >
                <Moon className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Only: Single Theme Toggle */}
            <button
              onClick={() => handleTheme(theme === "light" ? "dark" : "light")}
              className="flex sm:hidden items-center justify-center p-2 rounded-full card-theme border border-gray-200 dark:border-white/10"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
