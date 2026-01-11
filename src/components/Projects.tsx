import { profile } from "../Data/profile";
type Project = {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  link?: string;
};


export default function Projects({
  projects = profile.projects,
}: {
  projects?: readonly Project[];
}) {
  return (
    <section id="work" className="bg-theme">
      {/* same width as hero: max-w-3xl */}
      <div className="mx-auto max-w-3xl px-6 pt-0 pb-16">
        {/* heading */}
        <h2 className="text-3xl lg:text-4xl font-serif-custom text-theme mb-6">
          Products Shaped Through Strategy,
          <br />
          Craft, and Clear Design Thinking
        </h2>

        {/* grid — centered within max-w-3xl */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {projects.map((p) => (
            <a
              key={p.id}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block card-theme rounded-2xl overflow-hidden shadow-sm 
                         border-4 border-black transform transition-all duration-300 
                         hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* image */}
              <div className="relative aspect-video overflow-hidden bg-black/5 dark:bg-white/5 leading-none">
                <img
                  src={p.image}
                  alt={p.title}
                  className="block w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                {/* subtle gradient */}
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-300 
                             opacity-0 group-hover:opacity-80"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0) 10%, rgba(0,0,0,0.28) 60%)",
                  }}
                />
              </div>

              {/* text */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-theme">{p.title}</h3>
                <p className="text-sm text-muted mt-1">{p.subtitle}</p>
                <p className="mt-4 text-sm font-medium underline underline-offset-4
                              opacity-70 group-hover:opacity-100">
                  View project →
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* optional CTA */}
        {/* <div className="mt-12 flex justify-center">
          <button className="btn-outline">View more projects</button>
        </div> */}
      </div>

      <div className="mx-auto max-w-3xl px-6">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-serif-custom text-theme flex items-center justify-center gap-2">
            Work Experience
          </h2>
          <p className="text-muted text-xs mt-1">Companies I’ve worked with</p>
        </div>

        {/* Experience List */}
        <div className="space-y-6">
          {profile.experience.map((item, index) => (
            <div key={index} className="group cursor-default">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-110 group-hover:bg-white/15">
                    <img
                      src={item.company.logo}
                      alt={item.company.name}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:rotate-6"
                    />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-theme">
                      {item.company.name}
                    </h3>
                    <p className="text-xs text-muted">{item.role}</p>
                  </div>
                </div>

                <p className="text-xs text-muted whitespace-nowrap">
                  {item.duration}
                </p>
              </div>

              {/* divider except last item */}
              {index !== profile.experience.length - 1 && (
                <hr className="border-white/5 my-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
