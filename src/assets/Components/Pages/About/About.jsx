import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript, IoLogoReact } from "react-icons/io5";

export default function About() {
    return (
        <section
            id="about"
            className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white px-6 py-20"
        >
            <div className="max-w-4xl text-center">
                <h2 className="text-4xl font-bold mb-6 text-purple-400">About Me</h2>

                <p className="text-lg leading-relaxed text-gray-300 mb-6">
                    Hey! I'm <span className="font-semibold text-white">Mohd Faiz</span>, a
                    <span className="text-purple-400 font-semibold"> Frontend-Focused Web Developer</span> who
                    loves turning ideas into clean, responsive, and user-friendly websites.
                    I focus on building and managing the front-end of web applications that bring products
                    to life. You can check out some of my work in the
                    <span className="text-purple-400 font-semibold"> Projects</span> section.
                </p>

                <p className="text-lg leading-relaxed text-gray-300 mb-6">
                    I enjoy sharing what I learn about web development to help others in the dev community.
                    Feel free to connect with me on
                    <span className="text-purple-400 font-semibold"> LinkedIn</span> or check out my
                    <span className="text-purple-400 font-semibold"> GitHub</span> for my latest projects and code.
                </p>

                <p className="text-lg leading-relaxed text-gray-300 mb-8">
                    I'm currently <span className="font-semibold text-white">open to job opportunities</span>{" "}
                    where I can contribute, learn, and grow. If you think I’d be a good fit for your team,
                    don’t hesitate to reach out!
                </p>

                {/* --- Tech Stack Section --- */}
                <div className="mt-10">
                    <h3 className="text-2xl font-semibold mb-6 text-purple-400">
                        Technologies I Use
                    </h3>
                    <div className="flex flex-wrap justify-center gap-6 text-5xl">
                        <div className="flex flex-col items-center">
                            <FaHtml5 className="hover:text-orange-400" />
                            <p className="text-sm mt-2 text-gray-300">HTML</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <IoLogoCss3 className="hover:text-blue-600" />
                            <p className="text-sm mt-2 text-gray-300">CSS</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <IoLogoJavascript className="hover:text-amber-300"/>
                            <p className="text-sm mt-2 text-gray-300">JavaScript</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <IoLogoReact className="hover:text-blue-500" />
                            <p className="text-sm mt-2 text-gray-300 ">React</p>
                        </div>
                    </div>
                </div>

                {/* --- Social Links --- */}
                <div className="mt-12 flex justify-center gap-6 text-3xl">
                    <a
                        href="https://www.linkedin.com/in/your-linkedin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-600 transition"
                    >

                    </a>
                    <a
                        href="https://github.com/your-github"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition"
                    >

                    </a>
                </div>
            </div>
        </section>
    );
}
