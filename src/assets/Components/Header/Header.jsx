import { useState, useEffect } from "react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Detect which section is in view
            const sections = ["home", "about", "projects", "education", "contact"];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(section);
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", id: "home" },
        { name: "About", id: "about" },
        { name: "Projects", id: "projects" },
        { name: "Contact", id: "contact" },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-300">
            <nav
                className={`max-w-6xl mx-auto flex justify-between items-center px-8 py-4 transition-all duration-500 rounded-2xl border ${isScrolled
                        ? "bg-[#020617]/80 backdrop-blur-xl border-white/10 shadow-lg shadow-black/20"
                        : "bg-transparent border-transparent"
                    }`}
            >
                {/* Logo - Clicks to Top */}
                <button onClick={() => scrollToSection("home")} className="group flex items-center gap-3 cursor-pointer">
                    <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-500 transition-all">
                        <span className="text-white font-bold text-lg">F</span>
                    </div>
                    <span className="text-xl font-bold text-white tracking-tight">
                        Faiz<span className="text-blue-500">.</span>
                    </span>
                </button>

                {/* Navigation Links - Scroll Logic */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <button
                                onClick={() => scrollToSection(link.id)}
                                className={`text-sm font-medium transition-all duration-300 relative py-1 group cursor-pointer ${activeSection === link.id ? "text-white" : "text-gray-400 hover:text-white"
                                    }`}
                            >
                                {link.name}
                                <span className={`absolute bottom-0 left-0 h-[1.5px] bg-blue-500 transition-all duration-300 rounded-full ${activeSection === link.id ? "w-full" : "w-0 group-hover:w-full"
                                    }`}></span>
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Hire Me - Scrolls to Contact */}
                <div className="hidden md:flex items-center border-l border-white/10 pl-8">
                    <button
                        onClick={() => scrollToSection("contact")}
                        className="px-5 py-2 bg-blue-600/10 text-blue-400 border border-blue-500/20 text-xs font-bold rounded-xl hover:bg-blue-600 hover:text-white transition-all active:scale-95 cursor-pointer"
                    >
                        Hire Me
                    </button>
                </div>

                {/* Mobile Menu Icon */}
                <button
                    onClick={() => scrollToSection("contact")}
                    className="md:hidden flex flex-col gap-1.5 items-end group cursor-pointer"
                >
                    <span className="w-6 h-[2px] bg-white rounded-full transition-all group-hover:w-4"></span>
                    <span className="w-4 h-[2px] bg-blue-500 rounded-full"></span>
                </button>
            </nav>
        </header>
    );
}