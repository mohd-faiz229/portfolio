import React from "react";
import pfimage from "../../../../assets/images/pfimage.png";

export default function Home() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center bg-[#020617] overflow-hidden px-6 py-20"
        >
            {/* Darker, more atmospheric ambient glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/20 blur-[150px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-950/30 blur-[150px] -z-10" />

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

                {/* Text Content - Spans 7 columns on desktop */}
                <div className="md:col-span-7 order-2 md:order-1 text-center md:text-left">
                    <div className="inline-block px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-sm font-medium mb-6 backdrop-blur-sm">
                        Available for Work
                    </div>

                    <h1 className="text-5xl lg:text-8xl font-black text-white leading-none mb-6 tracking-tighter">
                        MOHD <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-700">FAIZ.</span>
                    </h1>

                    <p className="max-w-xl text-gray-400 text-lg md:text-xl mb-10 leading-relaxed mx-auto md:mx-0">
                        Bridging the gap between <span className="text-blue-100 font-medium">complex logic</span> and
                        <span className="text-blue-100 font-medium"> fluid design</span>. Specializing in high-end
                        React interfaces with a focus on dark-mode aesthetics.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-5">
                        <a
                            href="#projects"
                            className="w-full sm:w-auto px-10 py-4 bg-blue-700 hover:bg-blue-600 text-white font-bold rounded-sm transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(29,78,216,0.3)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px]"
                        >
                            EXPLORE WORK
                        </a>
                        <a
                            href="#contact"
                            className="w-full sm:w-auto px-10 py-4 border border-blue-900 bg-[#0a0f1e]/50 backdrop-blur-md text-blue-300 font-bold rounded-sm hover:border-blue-500 transition-colors"
                        >
                            GET IN TOUCH
                        </a>
                    </div>
                </div>

                {/* Aesthetic Image Container - Spans 5 columns */}
                <div className="md:col-span-5 order-1 md:order-2 flex justify-center items-center">
                    <div className="relative group">
                        {/* Decorative Geometric Background Shards */}
                        <div className="absolute -inset-4 border border-blue-500/20 rotate-3 group-hover:rotate-6 transition-transform duration-500" />
                        <div className="absolute -inset-4 border border-blue-500/10 -rotate-6 group-hover:-rotate-12 transition-transform duration-500" />

                        {/* The Main Frame */}
                        <div className="relative w-64 h-80 md:w-80 md:h-[450px] bg-slate-900 border border-white/10 overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-10" />
                            <img
                                src={pfimage}
                                alt="Mohd Faiz"
                                className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                            />

                            {/* Glass Overlay Tag */}
                            <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/5 backdrop-blur-xl border border-white/10 z-20">
                                <p className="text-xs uppercase tracking-[0.2em] text-blue-400 font-bold">Full Stack Developer</p>
                               
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}