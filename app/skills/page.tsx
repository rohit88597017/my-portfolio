const skillsData = [
    {
        category: "Frontend Stack",
        description: "Core technologies I use to build scalable web apps.",
        items: ["Next.js (App Router)", "React.js", "TypeScript", "JavaScript (ES6+)"],
    },
    {
        category: "Styling & UI",
        description: "Tools for making applications look pixel-perfect and responsive.",
        items: ["Tailwind CSS", "HTML5 & CSS3", "Framer Motion"],
    },
    {
        category: "Development Tools",
        description: "Ecosystem and version control tools for seamless workflow.",
        items: ["Git & GitHUb", "npm / pnpm", "VS Code"],
    },
];

export default function SkillsPage() {
    return (
        <section className="py-18 px-3 space-y-10">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    My Technical Toolkit
                </h1>
                <p className="text-slate-600 max-w-xl text-base">
                    A curated list of frameworks, languages, and tools that I have mastered and use in my daily development workflow.
                </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
                {skillsData.map((skillGroup) => (
                    <div key={skillGroup.category} className="p-6 bg-white border border-slate-200/80 rounded-2xl shadow-sm hover:border-slate-300 transition duration-200">
                        <h2 className="text-lg font-bold text-slate-900">
                            {skillGroup.category}
                        </h2>
                        <p className="text-xs text-slate-500 mt-1 mb-4 leading-relaxed">
                            {skillGroup.description}
                        </p>
                        <ul className="space-y-2.5">
                            {skillGroup.items.map((skills) => (
                                <li key={skills} className="text-sm text-slate-700 flex items-center gap-2.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                                        <span className="font-medium">
                                            {skills}
                                        </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}