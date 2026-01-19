import React from "react";
import { useNavigate } from "react-router-dom";
import pfimage from "../../../../assets/images/pfimage.png";

export default function Home() {
    const navigate = useNavigate();

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center bg-[#020617] overflow-hidden px-6 py-20"
        >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 blur-[150px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-950/20 blur-[150px] -z-10" />

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

                {/* Text Content */}
                <div className="md:col-span-7 order-2 md:order-1 text-center md:text-left">
                    <div className="inline-block px-4 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-6">
                        Always Learning & Building
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
                        MOHD <span className="text-blue-500">FAIZ.</span>
                    </h1>

                    <p className="max-w-xl text-gray-400 text-base md:text-lg mb-10 leading-relaxed mx-auto md:mx-0">
                        <span className="text-white">Mern-Stack developer</span> exploring the world of web development. I focus on making things that <span className="text-white">actually work</span> and learning the logic behind the code, one project at a time.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                        <button
                            onClick={() => navigate("/projects")}
                            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl transition-all duration-300 active:scale-95"
                        >
                            SEE WHAT I'VE MADE
                        </button>
                        <button
                            onClick={() => navigate("/contact")}
                            className="w-full sm:w-auto px-8 py-4 border border-white/10 bg-white/5 backdrop-blur-md text-white text-sm font-bold rounded-xl hover:bg-white/10 transition-all active:scale-95"
                        >
                            TALK TO ME
                        </button>
                    </div>
                </div>

                {/* Aesthetic Image Container */}
                <div className="md:col-span-5 order-1 md:order-2 flex justify-center items-center">
                    <div className="relative group">
                        <div className="absolute -inset-4 border border-blue-500/10 rounded-[2.5rem] rotate-3" />

                        <div className="relative w-64 h-80 md:w-72 md:h-[400px] bg-slate-900 border border-white/10 overflow-hidden shadow-2xl rounded-[2rem]">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-10" />
                            <img
                                src={pfimage}
                                alt="Mohd Faiz"
                                className="w-full h-full object-cover transition-transform duration-700"
                            />

                            <div className="absolute bottom-6 left-6 right-6 p-3 bg-white/5 backdrop-blur-xl border border-white/10 z-20 rounded-xl text-center">
                                <p className="text-[10px] uppercase tracking-[0.2em] text-blue-400 font-bold">Learning Every Day</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}