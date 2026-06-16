'use client';
import React from 'react';

const Header = () => {
  // Navigation Links array for scalability (Future mein naye links yahan add kar sakte ho)
  const navLinks = [
    { name: '[ HOME ]', href: '#' },
    { name: '[ SKILLS ]', href: '/skills' },
    { name: '[ PROJECTS ]', href: '/projects' },
    { name: '[ CONTACT ]', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#020617]/40 backdrop-blur-md border-b border-white/5 px-4 md:px-10 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* 1. Left Side Logo */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-gradient-to-tr from-cyan-400 to-purple-600 rounded-sm" />
          <span className="text-xs font-bold tracking-[0.2em] text-white uppercase font-mono">
            CORE_HUB //
          </span>
        </div>

        {/* 2. Center Navigation Links (Aapki Purani Navbar Ka Upgraded Logic) */}
        <nav className="hidden md:flex items-center gap-6 font-mono text-[11px] tracking-widest">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 relative group py-1"
            >
              {link.name}
              {/* Futuristic Underline Glow on Hover */}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-cyan-400 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#00ffff]" />
            </a>
          ))}
        </nav>

        {/* 3. Right Side Live System Status Indicator */}
        <div className="flex items-center gap-4 text-[10px] md:text-xs font-mono">
          <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-glow" />
            <span className="hidden xs:inline">SYSTEM STATUS:</span> ONLINE
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;