// app/page.tsx
import Header from './components/Header';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-[#f8fafc] font-sans overflow-x-hidden relative">
      
      {/* 🔮 Dynamic Background Grid & Ambient AI Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Top Cyber Glow Effect */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-950/20 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      
      {/* Side Ambient Glow */}
      <div className="absolute top-[40%] left-[-10%] w-[400px] h-[400px] bg-cyan-950/10 rounded-full blur-[120px] pointer-events-none" />

      {/* 🛰️ Fixed Status Top-Bar Header */}
      <Header />
      
      {/* 🌌 Core Visual Layout Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 space-y-32 relative z-10">
        
        {/* Section 1: Hologram Avatar & Core Headings */}
        <Hero />
        
        {/* Section 2: AI Matrix Skills Bento Grid */}
        <TechStack />
        
        {/* Section 3: Live Terminal Tab Showroom (Web vs CLI) */}
        <Projects />

        {/* Section 4: Footer */}
        <Footer />

      </div>
    </main>
  );
}