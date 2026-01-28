import React from "react";
import { motion } from "framer-motion";
import { RiGithubLine, RiExternalLinkLine } from "react-icons/ri";
import inventory from "../../../Images/Inventory.png";
import crm from "../../../Images/CRM.png";
import weather from "../../../Images/WeatherApp.png";

export default function Projects() {
    const projectData = [
        {
            title: "Inventory System",
            type: "Full-Stack",
            description: "A robust MERN application for real-time stock management. Features full CRUD operations with a secure backend architecture.",
            tags: ["React", "Node.js", "Express", "MongoDB"],
            github: "https://github.com/your-repo",
            live: "",
            image: inventory
        },
        {
            title: "Customer Manager (CRM)",
            type: "Full-Stack",
            description: "Centralized client management system. Implements secure authentication and data persistence for enterprise contact tracking.",
            tags: ["React", "Node.js", "Express", "MongoDB"],
            github: "https://github.com/mohd-faiz229/CRM-CustomerRelationalManagement-frontend.git",
            live: "https://crm-customer-relational-management.vercel.app/login",
            image: crm
        },
        {
            title: "Weather Dashboard",
            type: "Frontend",
            description: "Dynamic weather tracking application utilizing OpenWeather API. Features localized search and real-time environmental data visualization.",
            tags: ["JavaScript", "API", "Tailwind CSS"],
            github: "https://github.com/mohd-faiz229/weather-app.git",
            live: "https://weather-app-ten-inky-83.vercel.app/",
            image: weather
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const cardVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section id="projects" className="relative bg-[#020617] text-white py-32 px-6 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center md:text-left"
                >
                    <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
                        LATEST <span className="text-blue-600">WORK.</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl">
                        A selection of full-stack and frontend applications built with a focus on
                        <span className="text-white font-medium"> performance</span> and
                        <span className="text-white font-medium"> user experience</span>.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projectData.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -10 }}
                            className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden flex flex-col hover:border-blue-500/40 transition-colors duration-500 shadow-2xl"
                        >
                            {/* Image Container with Overlay */}
                            <div className="relative aspect-video overflow-hidden">
                                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                <motion.img
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <span className="text-[10px] text-blue-500 font-black uppercase tracking-[0.2em] mb-3">
                                    {project.type}
                                </span>
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow font-light">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-[9px] font-bold text-gray-400 border border-white/10 px-2 py-1 rounded-md uppercase tracking-wider bg-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-6 pt-6 border-t border-white/10">
                                    <a href={project.github} target="_blank" rel="noreferrer"
                                        className="flex items-center gap-2 text-xs font-black tracking-widest text-gray-400 hover:text-white transition-colors">
                                        <RiGithubLine className="text-lg" /> SOURCE
                                    </a>
                                    {project.live !== "" && (
                                        <a href={project.live} target="_blank" rel="noreferrer"
                                            className="flex items-center gap-2 text-xs font-black tracking-widest text-blue-500 hover:text-blue-400 transition-colors">
                                            <RiExternalLinkLine className="text-lg" /> LIVE DEMO
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}