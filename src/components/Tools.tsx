import { profile } from "../Data/profile.ts"

export default function ToolsFullStack() {
  const groups = profile.tools;
  return (
    <section id="tools" className="bg-theme">
      <div className="mx-auto max-w-3xl px-6 pt-8 pb-4">
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
                    <div className="icon-wrap w-9 h-9 rounded-md flex items-center justify-center overflow-hidden bg-gray-100 dark:bg-white/5">
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
