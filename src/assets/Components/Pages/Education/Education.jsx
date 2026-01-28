import React from "react";
import { RiBookLine, RiCalendarLine } from "react-icons/ri";

export default function Education() {
    const educationData = [
        {
            degree: "Bachelor of Science Honours in Computer Science",
            institution: "SGRR University",
            duration: "2022 — 2025",
            description: "Basic computer science concepts, databases, and software development basics.",
            // Added empty array here just to be safe, but the code below handles it anyway
            skills: [""]
        },
        {
            degree: "Full Stack Development (MERN)",
            institution: "Brillica Services",
            duration: "2026",
            description: "Full-stack web development with MongoDB, Express, React, and Node.js.",
            skills: ["MongoDB", "Express", "React", "Node.js"]
        }
    ];

    return (
        <section id="education" className="bg-[#020617] text-white py-20 px-6">
            <div className="max-w-5xl mx-auto">

                <div className="mb-12">
                    <h2 className="text-3xl font-bold tracking-tight mb-2">
                        My <span className="text-blue-500">Education</span>
                    </h2>
                    <p className="text-gray-400 text-sm">Academic foundation and technical training.</p>
                </div>

                <div className="space-y-6">
                    {educationData.map((edu, index) => (
                        <div key={index} className="p-6 bg-slate-900/40 border border-white/5 rounded-2xl">
                            <div className="flex flex-col md:flex-row justify-between gap-4">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-blue-500 text-[10px] font-bold uppercase tracking-widest">
                                        <RiBookLine /> ACADEMIC BACKGROUND
                                    </div>
                                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                                    <p className="text-sm text-gray-300">{edu.institution}</p>
                                    <p className="text-sm text-gray-500 max-w-2xl">{edu.description}</p>

                                    {/* FIX: Using optional chaining ?.map() to prevent the crash */}
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {edu.skills?.map((skill, i) => (
                                            <span key={i} className="text-[9px] px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full font-bold uppercase">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-gray-500 text-xs shrink-0">
                                    <RiCalendarLine /> {edu.duration}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}