import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { profile } from "../Data/profile";

export default function Hero() {
  useEffect(() => {
    const parent = document.getElementById("linksContainer");
    if (!parent) return;

    const links = Array.from(
      parent.querySelectorAll<HTMLElement>(".interactive-link")
    );
    const highlight = parent.querySelector<HTMLElement>(".links-highlight-bg");
    if (!highlight || links.length === 0) return;

    // helper: set CSS variables on the parent so CSS can animate transform/width
    const setHighlight = (el: HTMLElement) => {
      const pr = parent.getBoundingClientRect();
      const r = el.getBoundingClientRect();
      const x = Math.round(r.left - pr.left);
      const w = Math.round(r.width);
      parent.style.setProperty("--x", `${x}px`);
      parent.style.setProperty("--w", `${w}px`);
    };

    // mouse enter handlers
    const enterHandlers: (() => void)[] = [];
    links.forEach((link) => {
      const onEnter = () => setHighlight(link);
      link.addEventListener("mouseenter", onEnter);
      enterHandlers.push(() => link.removeEventListener("mouseenter", onEnter));
    });

    const onLeave = () => {
      // hide by shrinking width to 0 (will animate back smoothly)
      parent.style.setProperty("--w", `0px`);
    };
    parent.addEventListener("mouseleave", onLeave);

    // cleanup
    return () => {
      enterHandlers.forEach((off) => off());
      parent.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section id="hero" className="relative z-10 bg-theme">
      <div className="mx-auto max-w-3xl px-6 pt-12 pb-6">
        {/* Top row: small avatar + name */}
        <div className="flex items-start gap-6 mb-10">
          <div
            className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 border-2 border-black dark:border-white/20 
                       shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,255,255,0.05)]
                       hover:rotate-3 hover:scale-110 hover:-translate-y-1 transition-all duration-500 ease-out cursor-pointer"
          >
            <img
              src={profile.basic.img}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h1 className="text-2xl font-semibold text-theme mb-1">
              {profile.basic.name}
            </h1>
            <p className="text-muted text-sm">{profile.basic.role}</p>
            <p className="text-muted text-xs sm:hidden mt-0.5">{profile.basic.location}</p>
          </div>
        </div>

        {/* Big hero heading */}
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif-custom leading-tight mb-6 text-theme">
            Where <span className="gradient-name">Innovation</span> Finds
            <br />
            Its Form in Design
          </h2>

          <div className="flex items-center gap-4 mb-8">
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center"
            >
              Get in touch
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center gap-2 group"
            >
              My Resume
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>

        {/* Social links + blurb */}
        <div className="mb-12 space-y-8">
          <div className="w-full">
            {/* container: stack on mobile, inline on sm+ */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-20 lg:gap-40">
              {/* Left label */}
              <p className="text-lg font-bold text-[var(--text)] whitespace-nowrap mb-3 sm:mb-0">
                Find me on
              </p>

              {/* Socials + sliding highlight */}
              <div
                className="relative inline-flex items-center gap-6 sm:gap-10 links-nav-wrap overflow-x-auto sm:overflow-visible py-1"
                id="linksContainer"
                style={{ WebkitOverflowScrolling: "touch" }}
              >
                {[
                  {
                    name: "LinkedIn",
                    url: profile.social.linkedin,
                  },
                  { name: "GitHub", url: profile.social.github },
                  {
                    name: "Discord",
                    url: profile.social.discord,
                  },
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 px-3 py-1 text-lg sm:text-xl font-semibold text-[var(--text)] hover:text-theme transition-colors interactive-link whitespace-nowrap"
                  >
                    {item.name}
                  </a>
                ))}

                {/* highlight bar */}
                <span className="links-highlight-bg absolute top-1/2 -translate-y-1/2 left-0 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="space-y-6 text-theme">
            {profile.summary.paragraphs.map((para, index) => (
              <p key={index} className="leading-relaxed">
                {para.highlight ? (
                  <>
                    {para.text.split(para.highlight)[0]}
                    <span className="font-semibold">{para.highlight}</span>
                    {para.text.split(para.highlight)[1]}
                  </>
                ) : (
                  para.text
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
