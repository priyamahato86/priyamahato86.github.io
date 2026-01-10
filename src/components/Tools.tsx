import React from "react";

/**
 * ToolsFullStack.tsx
 * Centered, compact "How I Build — Tech & Tools" for a Full-Stack developer.
 *
 * Place tool icons in: public/icons/<name>.png (list below)
 */

const groups = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: "https://cdn.iconscout.com/icon/free/png-256/free-react-icon-svg-download-png-282599.png?f=webp" },
      { name: "Next.js", icon: "https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png" },
      { name: "Tailwind", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: "https://www.datocms-assets.com/148875/1739885462-circular-logo-nodejs.png?auto=format%2Ccompress&fit=crop&h=190&w=190" },
      { name: "Express", icon: "https://www.manektech.com/storage/developer/1646733543.webp" },
      { name: "JavaScript", icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
      { name: "TypeScript", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/1200px-Typescript.svg.png" },
    ],
  },
  {
    title: "DevOps",
    items: [
      { name: "Docker", icon: "https://www.stackhero.io/assets/src/images/servicesLogos/openGraphVersions/docker.png?d87f4381" },
      { name: "Vercel", icon: "https://pipedream.com/s.v0/app_XaLh2x/logo/orig" },
      { name: "GitHub Actions", icon: "https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU" },
    ],
  },
  {
    title: "Database & ORMs",
    items: [
      { name: "Postgres", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1163px-Postgresql_elephant.svg.png" },
      { name: "MongoDB", icon: "https://d2lgmzy8vjj79z.cloudfront.net/mongodb.svg" },
      { name: "Prisma", icon: "https://img.icons8.com/ios7/1200/prisma-orm.jpg" },
      { name: "Mongoose", icon: "https://thecodebarbarian.com/images/mongoose5.png" },
    ],
  },
  {
    title: "Misc / Productivity",
    items: [
      { name: "Git / GitHub", icon: "https://avatars.githubusercontent.com/u/18133?s=280&v=4" },
      { name: "VS Code", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2sWIwNrqZXnmkybebuof7BX841YTGYh_5jg&s" },
      { name: "Postman", icon: "https://media.licdn.com/dms/image/v2/C560BAQFf8sH83foEVg/company-logo_200_200/company-logo_200_200/0/1654794308958/postman_platform_logo?e=2147483647&v=beta&t=a5LsRCE_TyPzRMSE1RpVH8Mo3C3G7_DqW5Q1ZAt3ADo" },
    ],
  },
];

export default function ToolsFullStack() {
  return (
    <section id="tools" className="bg-theme">
      <div className="mx-auto max-w-3xl px-6 pt-12 pb-6">
        <header className="mb-6 text-center">
          <h1 className="text-2xl font-serif-custom text-theme">How I Build — Tech & Tools</h1>
          <p className="text-sm text-muted mt-2 max-w-xl mx-auto">
            From concept to code , a focused stack I rely on to build scalable, maintainable products.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {groups.map((group) => (
            <section key={group.title} className="space-y-3">
              <h3 className="text-sm font-semibold text-theme">{group.title}</h3>

              <div className="flex flex-wrap gap-3">
                {group.items.map((it) => (
                  <div
                    key={it.name}
                    className="tool-item flex items-center gap-3 p-2 rounded-md"
                    role="button"
                    tabIndex={0}
                    aria-label={it.name}
                    title={it.name}
                  >
                    <div className="icon-wrap w-9 h-9 rounded-md flex items-center justify-center overflow-hidden bg-white/5">
                      {/* image should be square — it will be centered and scaled */}
                      <img src={it.icon} alt={it.name} className="w-6 h-6 object-contain" />
                    </div>

                    <span className="text-sm text-theme">{it.name}</span>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
