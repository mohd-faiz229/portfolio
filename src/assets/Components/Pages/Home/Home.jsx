import React from "react";
import pfimage from "../Home/pfImage.png";

export default function Home() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center bg-[#020617] px-6 py-20 overflow-hidden">

            {/* Simplified Background Ambient Glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/10 blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <div className="text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
                        <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                        Always Learning & Building
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-black text-white mb-6">
                        MOHD <span className="text-blue-500">FAIZ.</span>
                    </h1>

                    <p className="max-w-lg text-gray-400 text-lg mb-10 leading-relaxed mx-auto md:mx-0">
                        IT Graduate with hands-on experience in MERN-based projects, focused on building and understanding full stack web applications.
                        Open to entry-level roles across development and IT domains.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <button
                            onClick={() => scrollToSection("projects")}
                            className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/20"
                        >
                            VIEW PROJECTS
                        </button>
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="px-8 py-4 border border-white/10 bg-white/5 text-white font-bold rounded-xl hover:bg-white/10 transition-all"
                        >
                            GET IN TOUCH
                        </button>
                    </div>
                </div>

                {/* Simplified Image Container */}
                <div className="flex justify-center">
                    <div className="relative w-72 h-[420px] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                        {/* Dark gradient to blend the bottom of your photo */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-10" />

                        <img
                            src={pfimage}
                            alt="Mohd Faiz"
                            className="w-full h-full object-cover"
                        />

                        {/* Floating Badge */}

                    </div>
                </div>

            </div>
        </section>
    );
}