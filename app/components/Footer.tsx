// app/components/Footer.tsx
import React from 'react';

const Footer = () => {
  // Dynamic links for easier updates later
  const socialLinks = [
    { name: 'GITHUB_LAB', url: 'https://github.com/rohit88597017' },
    { name: 'LINKEDIN_CORE', url: 'https://www.linkedin.com/in/rohit-yadav-474582411' },
  ];

  return (
    <footer className="w-full pt-12 border-t border-white/5 font-mono text-[11px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-slate-500">
        
        {/* 1. Left Section: Real-Time Operational Metrics */}
        <div className="flex flex-col gap-1.5 order-2 md:order-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span>LATENCY: <span className="text-cyan-400">0.02ms (OPTIMAL)</span></span>
          </div>
          <div>FRAMEWORK: <span className="text-white/70">NEXT.JS 15 (APP_ROUTER)</span></div>
        </div>

        {/* 2. Center Section: Copyright Security Stamp */}
        <div className="text-center order-3 md:order-2 text-slate-400 font-bold uppercase tracking-widest">
          © 2026 CORE_LABS // ALL_SYSTEMS_OPERATIONAL
        </div>

        {/* 3. Right Section: Futuristic External Portal Links */}
        <div className="flex justify-center md:justify-end gap-6 order-1 md:order-3">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-purple-400 transition-all duration-300 relative group"
            >
              [{link.name}]
              {/* Subtle hover neon splash */}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-purple-400 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#a855f7]" />
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;