import React from "react";
import { motion } from "framer-motion";
import { RiBookLine, RiCalendarLine } from "react-icons/ri";

export default function Education() {
    const educationData = [
        {
            degree: "Full Stack Development (MERN)",
            institution: "Brillica Services",
            duration: "2026",
            description: "Advanced training in full-stack architecture, focusing on building scalable MERN applications and API integration.",
            skills: ["MongoDB", "Express", "React", "Node.js"]
        },
        {
            degree: "Bachelor of Science Honours in Computer Science",
            institution: "SGRR University",
            duration: "2022 — 2025",
            description: "Core academic foundation in computer science concepts, databases, and software development principles.",
            skills: [""] // Filtered out in the UI
        }
    ];

    return (
        <section id="education" className="bg-[#020617] text-white py-28 px-6 relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/5 blur-[120px] -z-10" />

            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
                        MY <span className="text-blue-600">EDUCATION.</span>
                    </h2>
                    <p className="text-gray-400 text-lg font-light">Academic foundation and technical training.</p>
                </motion.div>

                <div className="space-y-8 relative">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-blue-600/50 via-white/10 to-transparent ml-2 md:ml-0" />

                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-[3px] md:-left-[5px] top-2 w-3 h-3 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.8)]" />

                            <div className="group p-8 bg-white/5 border border-white/5 rounded-2xl hover:border-blue-500/30 transition-all duration-500 hover:bg-white/[0.07]">
                                <div className="flex flex-col md:flex-row justify-between gap-6">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2 text-blue-500 text-[10px] font-black uppercase tracking-[0.2em]">
                                            <RiBookLine className="text-sm" />
                                            {index === 0 ? "Latest Qualification" : "Academic Background"}
                                        </div>

                                        <div>
                                            <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">
                                                {edu.degree}
                                            </h3>
                                            <p className="text-gray-300 font-medium mt-1">{edu.institution}</p>
                                        </div>

                                        <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-2xl">
                                            {edu.description}
                                        </p>

                                        {/* Skill Tags - Filter out empty strings */}
                                        {edu.skills?.filter(s => s.trim() !== "").length > 0 && (
                                            <div className="flex flex-wrap gap-2 pt-2">
                                                {edu.skills.map((skill, i) => (
                                                    <span key={i} className="text-[10px] px-3 py-1 bg-blue-600/10 text-blue-400 border border-blue-500/20 rounded-full font-bold uppercase tracking-tighter">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg text-gray-400 text-xs font-mono h-fit border border-white/5 whitespace-nowrap">
                                        <RiCalendarLine className="text-blue-500" /> {edu.duration}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}