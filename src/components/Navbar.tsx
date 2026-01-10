import { Dot, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

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
          {/* Left side (brand + location) */}
          <div className="flex items-center gap-3">
            <div className="text-lg font-semibold text-theme select-none">PM</div>
            <div className="text-sm text-muted sm:block">Kolkata , West Bengal</div>
          </div>

          {/* Right side: responsive stacking */}
          <div className="flex items-center">
            <div
              className="flex flex-col md:flex-row md:items-center md:gap-3 items-end gap-3"
              aria-hidden={false}
            >
              {/* Availability Badge */}
              <div className="flex items-center gap-2 card-theme rounded-full px-3 py-2 border border-black/10">
                <Dot className="w-3.5 h-3.5 blink-dot-strong" />
                <span className="text-sm text-theme">Available for work</span>
              </div>

              {/* Theme toggles: on mobile these will be below because of flex-col,
                  on md+ they will be to the right because of md:flex-row */}
              <div className="flex items-center gap-2 card-theme rounded-full p-1 border border-black/10">
                <button
                  onClick={() => handleTheme("light")}
                  aria-pressed={theme === "light"}
                  className={`flex items-center justify-center p-2 rounded-full transition-all duration-200 ${
                    theme === "light" ? "bg-[var(--text)] text-[var(--card)]" : "text-muted hover:text-theme"
                  }`}
                  aria-label="Switch to light theme"
                >
                  <Sun className="w-4 h-4" />
                </button>

                <button
                  onClick={() => handleTheme("default")}
                  aria-pressed={theme === "default"}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                    theme === "default" ? "bg-[var(--text)] text-[var(--card)]" : "text-muted hover:text-theme"
                  }`}
                  aria-label="Reset theme to default"
                >
                  Default
                </button>

                <button
                  onClick={() => handleTheme("dark")}
                  aria-pressed={theme === "dark"}
                  className={`flex items-center justify-center p-2 rounded-full transition-all duration-200 ${
                    theme === "dark" ? "bg-[var(--text)] text-[var(--card)]" : "text-muted hover:text-theme"
                  }`}
                  aria-label="Switch to dark theme"
                >
                  <Moon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
