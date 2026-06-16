'use client'
import React, { useState } from "react";

const Projects = () => {
    const [activeTab, setActiveTab] = useState<'web' | 'cli'>('web');
    
    const webProjects = [
        {
            title: 'AI Production Hub',
            desc: 'Scalable landing infrastructure with state syncing.',
            stack: 'Next.js 15 / Tailwind v4',
        },
        {
            title: 'Dynamic Analytical Panel',
            desc: 'Complex server data processing pipelines.',
            stack: 'TypeScript / Next Server Actions',
        },
    ];

    const cliProjects = [
        {
            title: 'Custom Automation Engine',
            desc: 'Direct console script executing continuous CI/CD parameters.',
            stack: 'Node.js / Systems Architecture',
        },
        {
            title: 'Low-Level File Validator',
            desc: 'Memory-safe algorithmic scanner for structural validation.',
            stack: 'C / Assembly core Concept'
        },
    ];

    const currentProjects = activeTab === 'web' ? webProjects : cliProjects;

    return (
        <section id="projects" className="w-full">
            <div className="flex items-center gap-4 mb-10">
                <div className="h-px w-12 bg-purple-500/50" />
                <h2 className="text-xs font-mono tracking-[0.3em] text-purple-400 uppercase">
                    [02 // CORE_PROJECT-SHOWROOM]
                </h2>
            </div>
            <div className="flex gap-4 p-1.5 glass-card rounded-lg max-w-md mb-8 font-mono text-xs">
                <button onClick={() => setActiveTab('web')} className={`flex-1 py-2.5 rounded text-center transition-all duration-200 uppercase tracking-wider ${activeTab === 'web' ? 'bg-linear-to-r from-cyan-400 border border-cyan-500/30' : 'text-slate-400 hover:text-white'}`}>
                    🌐 Web Apps
                </button>
                <button onClick={() => setActiveTab('cli')} className={`flex-1 py-2.5 rounded text-center transition-all duration-200 uppercase tracking-wider ${activeTab === 'cli' ? 'bg-linear-to-r from-cyan-400 border border-cyan-500/30' : 'text-slate-400 hover:text-white'}`}>
                    🛠️ CLI & Systems
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentProjects.map((project, index) => (
                    <div key={index} className="glass-card p-5 rounded-lg border border-white/5 flex flex-col justify-between">
                        <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                            <div className="flex gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                                <span className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                            </div>
                            <div>
                                <h3 className="text-sm font-mono text-white font-bold tracking-wide uppercase">
                                    {project.title}
                                </h3>
                                <p className="text-xs text-slate-400 mt-2 font-sans leading-relaxed">
                                    {project.desc}
                                </p>
                            </div>
                            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                                <span className="text-[10px] font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20 px-2 py-0.5 rounded">
                                    {project.stack}
                                </span>
                                <a href="https://github.com/rohit88597017?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-[10px] font-mono text-cyan-400 hover:underline">
                                    [COMPILE_&_VIEW_→]
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;