import React from "react";
import { RiBookLine, RiAwardLine, RiCalendarLine } from "react-icons/ri";

export default function Education() {
    const educationData = [
        {
            degree: "Bachelor of Computer Applications (BCA)",
            institution: "Your University Name",
            duration: "2021 — 2024",
            description: "Focused on core computer science concepts, database management systems, and software engineering principles.",
            skills: ["Data Structures", "DBMS", "Operating Systems"]
        },
        {
            degree: "Full Stack Web Development",
            institution: "Self-Directed / Bootcamp",
            duration: "2024 — Present",
            description: "Intensive focus on the MERN stack, specializing in building scalable REST APIs and responsive frontend architectures.",
            skills: ["MongoDB", "Express", "React", "Node.js"]
        }
    ];

    return (
        <section id="education" className="relative bg-[#020617] text-white flex items-center justify-center px-6 py-20">
            <div className="max-w-5xl w-full mx-auto">

                {/* Section Header */}
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
                        My <span className="text-blue-500">Education</span>
                    </h2>
                    <p className="text-gray-400 text-sm max-w-md">
                        The academic foundation and technical training that shaped my development career.
                    </p>
                </div>

                {/* Education Timeline */}
                <div className="space-y-6">
                    {educationData.map((edu, index) => (
                        <div
                            key={index}
                            className="group relative p-6 md:p-8 bg-slate-900/40 border border-white/5 rounded-2xl hover:border-blue-500/20 transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-blue-500">
                                        <RiBookLine className="text-xl" />
                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Academic Background</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                        {edu.degree}
                                    </h3>

                                    <p className="text-sm text-gray-300 font-medium">
                                        {edu.institution}
                                    </p>

                                    <p className="text-sm text-gray-500 leading-relaxed max-w-2xl">
                                        {edu.description}
                                    </p>

                                    {/* Small Tags for Subjects */}
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {edu.skills.map((skill, i) => (
                                            <span key={i} className="text-[9px] px-3 py-1 bg-blue-500/5 border border-blue-500/10 text-blue-400 rounded-full font-bold uppercase">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-gray-500 md:bg-white/5 md:px-4 md:py-2 md:rounded-xl">
                                    <RiCalendarLine className="text-sm" />
                                    <span className="text-xs font-medium">{edu.duration}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}