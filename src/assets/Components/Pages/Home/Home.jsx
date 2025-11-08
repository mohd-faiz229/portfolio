import React from "react";
import { Link } from "react-router-dom"; // <-- import Link
// import pfimage from "../../../images/pfimage.png";

export default function Home() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center text-white pt-20 px-6"
        >
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Left Section (Text Content) */}
                <div className="text-center md:text-left md:w-1/2">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Hi, I'm Mohd Faiz 👋
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-10">
                        A passionate{" "}
                        <span className="text-purple-400 font-semibold">Front-End Developer</span> exploring modern technologies and designs.
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-6">
                        {/* Link to Projects Page */}
                        <Link
                            to="/projects"
                            className="px-8 py-3 rounded-lg font-semibold hover:shadow-lg shadow-purple-500/50 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
                        >
                            View Projects
                        </Link>

                        {/* Scroll to Contact Section */}
                        <a
                            href="/contact"
                            className="px-8 py-3 border border-purple-400 rounded-lg font-semibold hover:bg-purple-400 hover:text-black transition-all duration-300 hover:scale-105"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>

                {/* Right Section (Circular Image) */}
                <div className="relative md:w-1/2 flex justify-center">
                    <div className="w-64 h-64 md:w-80 md:h-80 bg-linear-to-br from-purple-500/30 to-blue-500/30 rounded-full shadow-lg shadow-purple-500/30 flex items-center justify-center overflow-hidden border-2 border-purple-500/30">
                        <img
                            // src={pfimage}
                            alt="Faiz Khan"
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
