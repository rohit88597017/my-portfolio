import React from "react";

const TechStack = () => {
    const skills = [
        {
            title: 'Next.JS APP ROUTER',
            desc: 'Micro-caching & Server Component Systems',
            tag: 'N',
            color: 'glow-purple',
        },
        {
            title: 'TYPESCRIPT STRICT',
            desc: 'Type-safe enterprise-lavel execution',
            tag: 'TS',
            color: 'glow-cyan',
        },
        {
            title: 'TAILWIND CSS OPTIMIZED',
            desc: 'Atomic design architecture & fluid layouts',
            tag: '🎨',
            color: 'glow-purple',
        },
        {
            title: 'LOW-LEVEL PROGRAMMING',
            desc: 'System utillities, automation, and core assembler logic',
            tag: '⚙️',
            color: 'glow-cyan',
        },
    ];

    return (
        <section id="skills" className="w-full">
            <div className="flex items-center gap-4 mb-10">
                <div className="h-px w-12 bg-cyan-500/50" />
                <h2 className="text-xs font-mono tracking-[0.3rem] text-cyan-400 uppercase">
                    [01 // TECHNOLOGY_STACK_MATRIX]
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                    <div key={index} className={`glass-card ${skill.color} p-6 rounded-lg relative overflow-hidden group transition-all duration-300 hover:-translate-y-1`}>
                        <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/2 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-md font-mono font-bold tracking-wide text-white group-hover:text-cyan-300 transition-colors">
                                    {skill.title}
                                </h3>
                                <p className="text-xs text-slate-400 mt-2 font-sans leading-relaxed">
                                    {skill.desc}
                                </p>
                            </div>
                            <div className="w-8 h-8 rounded bg-[#0b1426] border border-white/10 flex items-center justify-center font-mono text-xs text-white/70 font-bold shadow-inner">
                                {skill.tag}
                            </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                            <span>SYS_LOG: ACTIVE</span>
                            <span className="text-cyan-500/60">
                                INTELLIGENT_NODE_✓
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechStack;