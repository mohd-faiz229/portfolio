import React from "react";
import { RiGithubLine, RiExternalLinkLine } from "react-icons/ri";

export default function Projects() {
    const projectData = [
        {
            title: "Inventory Management System",
            type: "Full-Stack (CRUD)",
            description: "A professional inventory suite featuring real-time stock tracking, RESTful API integration, and secure database management.",
            tags: ["React", "Node.js", "Express", "MongoDB"],
            github: "https://github.com/your-repo",
            live: "",
            image: "https://via.placeholder.com/600x400/0a0f1e/3b82f6?text=Inventory+Management"
        },
        {
            title: "Customer Relationship Manager",
            type: "Full-Stack (CRUD)",
            description: "High-performance CRM designed for streamlined client data handling, contact lifecycle management, and secure authentication.",
            tags: ["React", "Node.js", "Express", "MongoDB"],
            github: "https://github.com/your-repo",
            live: "",
            image: "https://via.placeholder.com/600x400/0a0f1e/3b82f6?text=CRM+System"
        },
        {
            title: "Real-time Weather Engine",
            type: "Frontend (API Basics)",
            description: "Dynamic weather forecasting application leveraging OpenWeather APIs to deliver precise local climate data through a sleek UI.",
            tags: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
            github: "https://github.com/your-repo",
            live: "",
            image: "https://via.placeholder.com/600x400/0a0f1e/3b82f6?text=Weather+App"
        }
    ];

    return (
        <section id="projects" className="relative bg-[#020617] text-white py-24 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-center md:text-left">
                        Featured <span className="text-blue-500">Projects</span>
                    </h2>
                    <p className="text-gray-400 text-sm max-w-lg leading-relaxed text-center md:text-left">
                        A selection of my recent work, focusing on clean architecture,
                        responsive design, and robust backend logic.
                    </p>
                </div>

                {/* Projects Grid - 3 Columns on Large Screens */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectData.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-slate-900/40 border border-white/5 rounded-[1.5rem] overflow-hidden hover:border-blue-500/20 transition-all duration-500 shadow-xl flex flex-col"
                        >
                            {/* Project Image Container */}
                            <div className="relative aspect-video overflow-hidden">
                                <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-3 left-3 bg-[#020617]/80 backdrop-blur-md border border-white/10 px-2 py-0.5 rounded-full z-20">
                                    <span className="text-[8px] font-bold text-blue-400 uppercase tracking-widest">{project.type}</span>
                                </div>
                            </div>

                            {/* Project Details */}
                            <div className="p-5 flex flex-col flex-grow space-y-3">
                                <h3 className="text-lg font-bold text-white group-hover:text-blue-500 transition-colors leading-tight">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 text-xs leading-relaxed line-clamp-2 flex-grow">
                                    {project.description}
                                </p>

                                {/* Tech Stack Tags */}
                                <div className="flex flex-wrap gap-1.5 pt-1">
                                    {project.tags.map((tag, i) => (
                                        <div key={i} className="flex items-center gap-1 px-2 py-0.5 bg-white/5 border border-white/5 rounded-full">
                                            <div className="w-1 h-1 bg-blue-500 rounded-full" />
                                            <span className="text-[8px] font-bold text-gray-300 uppercase">{tag}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-4 pt-3 border-t border-white/5">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 hover:text-white transition-colors"
                                    >
                                        <RiGithubLine className="text-base" /> CODE
                                    </a>
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-[10px] font-bold text-blue-500 hover:text-blue-400 transition-colors"
                                    >
                                        <RiExternalLinkLine className="text-base" /> LIVE DEMO
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}