// app/components/Hero.tsx
import React from 'react';
import Image from 'next/image'; // <--- 1. Yeh import sabse upar add karo

const Hero = () => {
  return (
    <section className="flex flex-col items-center text-center pt-8">
      
      {/* Centered Hologram Circle with Subtle Profile Frame */}
      <div className="relative w-36 h-36 md:w-40 md:h-40 rounded-full flex items-center justify-center p-[2px] bg-gradient-to-b from-cyan-400 via-transparent to-purple-600 mb-8 shadow-[0_0_50px_rgba(168,85,247,0.15)]">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 animate-pulse pointer-events-none" />
        
        {/* 2. Emoji wala div hata kar yeh Next.js Image tag lagao */}
        <div className="w-full h-full rounded-full bg-[#090d16] flex items-center justify-center overflow-hidden border border-white/10 relative">
          <Image 
            src="/my-profile.png" // <--- Aapki photo ka path (public folder se direct)
            alt="Rohit Profile"
            fill // <--- Yeh photo ko frame ke hisaab se automatic fit karega
            className="object-cover" // <--- Isse photo stretch nahi hogi, perfectly crop hogi
            priority // <--- Isse photo browser khulte hi sabse pehle super-fast load hogi
          />
        </div>
        
        {/* Floating Technical Decorators */}
        <div className="absolute -right-3 top-4 bg-[#0b1329] border border-white/10 text-[9px] font-mono px-2 py-0.5 rounded text-purple-400">TS_STRICT</div>
        <div className="absolute -left-5 bottom-6 bg-[#0b1329] border border-white/10 text-[9px] font-mono px-2 py-0.5 rounded text-cyan-400">NEXT_15</div>
      </div>

      {/* Baki ka heading aur button wala code niche same rahega... */}
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight max-w-3xl leading-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-slate-300 to-slate-400">
        CORE ENGINEERING LAB.<br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 uppercase tracking-wide text-xl sm:text-3xl font-mono block mt-2">
          Architecting Flawless Digital Systems With AI Precision
        </span>
      </h1>

      <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-xl font-mono">
        Breaking standard boundaries to design high-performance applications, modular system infrastructures, and scalable automation tools.
      </p>

      <div className="mt-8 flex flex-wrap gap-4 justify-center font-mono text-xs">
        <a href="#projects" className="px-6 py-3 glass-card rounded text-purple-400 uppercase tracking-wider glow-purple transition-all duration-300 hover:scale-105 active:scale-95">
          [View Open Source]
        </a>
        <a href="#contact" className="px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/40 text-cyan-400 rounded uppercase tracking-wider glow-cyan transition-all duration-300 hover:scale-105 active:scale-95">
          [Connect / Let's Sync]
        </a>
      </div>

    </section>
  );
};

export default Hero;