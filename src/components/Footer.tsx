import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-theme">
      <div className="mx-auto max-w-3xl px-6 py-6 flex items-center justify-between border-t border-black/10 dark:border-white/10">

        {/* Left */}
        <p className="text-sm text-muted">
          © 2026 Priya Mahato. All rights reserved.
        </p>

        {/* Right */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-sm text-muted hover:text-theme transition-colors group"
        >
          Back to top
          <span
            className="
              w-8 h-8 rounded-full flex items-center justify-center
    border border-black/20 dark:border-white/30
    bg-white text-black
    dark:bg-black dark:text-white
    transition-all duration-300
    group-hover:-translate-y-1
    group-hover:shadow-lg
    dark:group-hover:shadow-white/10
            "
          >
            <ArrowUp className="w-4 h-4" />
          </span>
        </button>

      </div>
    </footer>
  );
}


