import { Link } from "react-router-dom";
import { profile } from "../Data/profile";

export default function Certifications() {
  return (
    <section id="certificates" className="bg-theme">
      <div className="mx-auto max-w-3xl px-6 pt-0 pb-12">
        {/* Heading */}
        <header className="mb-6 text-center">
          <h2 className="text-2xl font-serif-custom text-theme">
            Certifications
          </h2>
          <p className="text-sm text-muted mt-2 max-w-md mx-auto">
            Certifications earned through consistent learning and hands-on
            practice.
          </p>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {profile.certifications.map((cert) => (
            <a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card group block rounded-lg p-4 border border-white/10 bg-white/5 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  {/* Provider Icon */}
                  <div className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center overflow-hidden shrink-0">
                    <img
                      src={cert.providerIcon}
                      alt={cert.issuer}
                      className="w-5 h-5 object-contain"
                    />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-sm font-semibold text-theme leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-muted mt-0.5">{cert.issuer}</p>
                  </div>
                </div>

                <span className="text-xs text-muted whitespace-nowrap">
                  {cert.year}
                </span>
              </div>

              {/* subtle underline on hover */}
              <div className="mt-3 h-px w-0 bg-[var(--text)] transition-all duration-300 group-hover:w-full opacity-30" />
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-10 text-center">
        {/* Main Heading */}
        <h2 className="text-lg sm:text-lg lg:text-xl font-serif-custom text-theme leading-tight mb-4">
          Design with purpose
          <br />
          turns ideas into impact.
        </h2>

        {/* Subtext */}
        <p className="text-muted italic text-sm sm:text-base max-w-md mx-auto mb-8">
          I collaborate with teams to cut through complexity, define
          experiences, and deliver with precision.
        </p>

        {/* Contact Button */}
        <Link
          to="/contact"
          className="
    inline-flex items-center justify-center rounded-full
    px-6 py-2.5 text-sm font-medium
    transition-all duration-300
    hover:scale-105 hover:shadow-lg

    /* light mode */
    bg-black text-white

    /* dark mode */
    dark:bg-white dark:text-black
  "
        >
          Contact me
        </Link>

        {/* Signature */}
        <p className="mt-10 text-lg font-signature text-muted italic animate-signature">
          {profile.basic.name}
        </p>
      </div>
    </section>
  );
}
