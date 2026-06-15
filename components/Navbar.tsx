import { Herr_Von_Muellerhoff } from "next/font/google";
import Link from "next/link";

export default function Navbar() {
    
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Skills", href: "/skills" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full  bg-white/70 backdrop-blur-md z-50 border-b border-slate-100">
            <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold text-slate-950">
                    Dev <span className="text-blue-600">.</span>
                </Link>

                <div className="flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition">
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}