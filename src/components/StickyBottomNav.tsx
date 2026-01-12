import { UserCircle, Briefcase, Wrench, Award, GraduationCap } from "lucide-react";
import { useState } from "react";

const items = [
  { id: "about", href: "#hero", label: "About", Icon: UserCircle },
  { id: "work", href: "#work", label: "Work", Icon: Briefcase },
  { id: "tools", href: "#tools", label: "Tools", Icon: Wrench },
  { id: "education", href: "#education", label: "Education", Icon: GraduationCap },
  {
    id: "certificates",
    href: "#certificates",
    label: "Certifications",
    Icon: Award,
  },
];

export default function StickyBottomNav() {
  const [activeId, setActiveId] = useState<string>("about");
  return (
    <nav className="fixed bottom-3 left-1/2 -translate-x-1/2 z-30">
      <div
        className="
          flex items-center gap-2
          rounded-xl px-2 py-1.5
          backdrop-blur-md
          shadow-sm
        "
        style={{
          background: "var(--bottom-nav-bg)",
          borderColor: "var(--bottom-nav-border)",
          borderWidth: "1px",
        }}
      >
        {items.map(({ id, href, label, Icon }) => (
          <a
            key={id}
            href={href}
            aria-label={label}
            onClick={(e) => {
              e.preventDefault();
              setActiveId(id);

              const section = document.querySelector(href);
              section?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`
              group relative
              flex items-center justify-center
              w-8 h-8
              rounded-lg
              transition-all duration-150
              hover:-translate-y-0.5
              hover:bg-[var(--bottom-nav-hover)]
              ${activeId === id ? "bg-[var(--bottom-nav-active)]" : ""}
            `}
          >
            {/* Tooltip */}
            <span
              className="
                absolute -top-8 left-1/2 -translate-x-1/2
                px-2 py-0.5
                rounded-md text-[11px] font-medium
                opacity-0 translate-y-1
                group-hover:opacity-100 group-hover:translate-y-0
                transition-all duration-150
                pointer-events-none whitespace-nowrap
              "
              style={{
                background: "var(--bottom-nav-bg)",
                color: "var(--bottom-nav-icon)",
                borderColor: "var(--bottom-nav-border)",
                borderWidth: "1px",
              }}
            >
              {label}
            </span>

            {/* Icon */}
            <Icon
              className="w-4 h-4 transition-transform duration-150 group-hover:scale-110"
              style={{ color: "var(--bottom-nav-icon)" }}
            />
          </a>
        ))}
      </div>
    </nav>
  );
}
