import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 px-6 py-6 transition-all duration-300">
            <nav
                className={`max-w-7xl mx-auto flex justify-between items-center px-10 py-5 transition-all duration-500 rounded-none border-b ${isScrolled
                        ? "bg-[#020617]/70 backdrop-blur-2xl border-blue-500/30 shadow-[0_10px_30px_-15px_rgba(30,58,138,0.5)]"
                        : "bg-transparent border-transparent"
                    }`}
            >
                {/* Sharp Logo Aesthetic */}
                <Link to="/" className="group flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-600 flex items-center justify-center rotate-45 group-hover:rotate-90 transition-transform duration-500">
                        <span className="text-white font-black -rotate-45 group-hover:-rotate-90 transition-transform duration-500">F</span>
                    </div>
                    <span className="text-2xl font-black text-white tracking-[0.2em] uppercase ml-2">
                        Faiz<span className="text-blue-500">_</span>
                    </span>
                </Link>

                {/* Navigation Links - Large & Visible */}
                <ul className="hidden md:flex items-center gap-12">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                to={link.path}
                                className="text-sm font-black uppercase tracking-[0.2em] text-white/60 hover:text-blue-400 transition-all duration-300 relative py-2 group"
                            >
                                {link.name}
                                {/* Sharp Industrial Hover Effect */}
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                                <span className="absolute -top-1 -right-2 opacity-0 group-hover:opacity-100 text-[10px] text-blue-500 transition-all">
                                    0{navLinks.indexOf(link) + 1}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Right Action Section */}
                <div className="hidden md:flex items-center gap-6 border-l border-white/10 pl-6">
                    <a
                        href="/resume.pdf"
                        className="text-[10px] font-bold text-blue-400 uppercase tracking-widest hover:text-white transition-colors"
                    >
                        Resume
                    </a>
                    <Link
                        to="/contact"
                        className="px-6 py-2 bg-blue-700 text-white text-xs font-black uppercase tracking-[0.15em] hover:bg-blue-600 hover:translate-x-1 hover:-translate-y-1 transition-all shadow-[4px_4px_0px_0px_rgba(30,58,138,1)] active:shadow-none active:translate-x-0 active:translate-y-0"
                    >
                        Contact
                    </Link>
                </div>

                {/* Mobile Menu Icon (Cyber Style) */}
                <button className="md:hidden flex flex-col gap-1.5 items-end group">
                    <span className="w-8 h-[2px] bg-white group-hover:w-4 transition-all"></span>
                    <span className="w-5 h-[2px] bg-blue-500"></span>
                    <span className="w-8 h-[2px] bg-white group-hover:w-6 transition-all"></span>
                </button>
            </nav>
        </header>
    );
}