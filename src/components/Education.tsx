import { profile } from "../Data/profile";

export default function Education() {
    const education = profile.education;
    return (
        <section id="education" className="bg-theme">
            <div className="mx-auto max-w-3xl px-6 pt-4 pb-6">
                {/* Heading */}
                <header className="mb-6 text-center">
                    <h2 className="text-2xl font-serif-custom text-theme">Education</h2>
                    <p className="text-muted text-xs mt-1">My academic journey and qualifications</p>
                </header>
                {/* Education List - matching experience style */}
                <div className="space-y-6">
                    {education.map((edu, index) => (
                        <div key={index} className="group cursor-default">
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-3">
                                    {/* Institution Icon */}
                                    <div className="w-8 h-8 rounded-md bg-zinc-900 dark:bg-white/10 flex items-center justify-center overflow-hidden shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-zinc-800 dark:group-hover:bg-white/15">
                                        <img
                                            src={edu.icon}
                                            alt={edu.school}
                                            className="w-full h-full object-contain p-1 transition-transform duration-300 group-hover:rotate-6"
                                        />
                                    </div>

                                    {/* Info */}
                                    <div>
                                        <h3 className="text-sm font-semibold text-theme">
                                            {edu.school}
                                        </h3>
                                        <p className="text-xs text-muted max-w-[200px] sm:max-w-none">
                                            {edu.degree}
                                        </p>
                                    </div>
                                </div>

                                {/* Date */}
                                <p className="text-xs text-muted whitespace-nowrap">
                                    {edu.year}
                                </p>
                            </div>

                            {/* divider except last item */}
                            {index !== education.length - 1 && (
                                <hr className="border-gray-200 dark:border-white/5 my-4" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
