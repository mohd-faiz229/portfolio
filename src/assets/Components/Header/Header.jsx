import { useState, useEffect } from "react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMenuOpen]);

    const goToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });

            setIsMenuOpen(false);
        }
    };

    const navLinks = [
        { name: "Home", id: "home" },
        { name: "About", id: "about" },
        { name: "Projects", id: "projects" },
        { name: "Education", id: "education" },
        { name: "Contact", id: "contact" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-[100] px-4 md:px-6 py-4 transition-all duration-300">
            <nav
                className={`max-w-6xl mx-auto flex justify-between items-center px-6 md:px-8 py-4 transition-all duration-500 rounded-2xl border ${isScrolled || isMenuOpen
                        ? "bg-[#020617]/90 backdrop-blur-xl border-white/10 shadow-xl"
                        : "bg-transparent border-transparent"
                    }`}
            >
                {/* Logo */}
                <button onClick={() => goToSection("home")} className="z-[110] group flex items-center gap-3 cursor-pointer outline-none bg-transparent border-none">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-all">
                        <span className="text-white font-bold text-base">F</span>
                    </div>
                    <span className="text-lg font-bold text-white tracking-tight">Faiz.</span>
                </button>

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <button
                                onClick={() => goToSection(link.id)}
                                className="text-xs font-medium transition-all duration-300 text-gray-400 hover:text-white cursor-pointer outline-none bg-transparent border-none uppercase tracking-wider"
                            >
                                {link.name}
                            </button>
                        </li>
                    ))}
                    <button
                        onClick={() => goToSection("contact")}
                        className="ml-2 px-4 py-2 bg-blue-600 text-white text-[10px] font-bold rounded-lg hover:bg-blue-500 transition-all active:scale-95"
                    >
                        HIRE ME
                    </button>
                </ul>

                {/* Hamburger */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden z-[110] flex flex-col gap-1.5 focus:outline-none bg-transparent border-none"
                >
                    <span className={`block h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`}></span>
                    <span className={`block h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : "w-4"}`}></span>
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                </button>

                {/* Mobile Drawer (Right Side) */}
                <div
                    className={`fixed top-0 right-0 h-screen w-[250px] z-[105] bg-[#020617] border-l border-white/10 transition-transform duration-500 ease-in-out md:hidden flex flex-col pt-24 px-8 gap-6 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <p className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.2em] mb-2">Navigation</p>
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => goToSection(link.id)}
                            className="text-left text-sm font-semibold text-gray-400 hover:text-white transition-colors uppercase tracking-widest"
                        >
                            {link.name}
                        </button>
                    ))}
                    <button
                        onClick={() => goToSection("contact")}
                        className="mt-4 px-6 py-3 bg-blue-600 text-white text-xs font-bold rounded-xl shadow-lg shadow-blue-600/20 active:scale-95 uppercase"
                    >
                        Hire Me Now
                    </button>
                </div>

                {/* Dark Backdrop for Mobile Menu */}
                {isMenuOpen && (
                    <div
                        onClick={() => setIsMenuOpen(false)}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[102] md:hidden"
                    />
                )}
            </nav>
        </header>
    );
}