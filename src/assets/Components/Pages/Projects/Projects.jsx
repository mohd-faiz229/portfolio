import React, { useState } from "react"; // Added useState though not used yet, as per your request
import { RiGithubLine, RiExternalLinkLine } from "react-icons/ri";
import inventory from "../../../Images/Inventory.png";
import crm from "../../../Images/CRM.png";
import weather from "../../../Images/WeatherApp.png";

export default function Projects() {
    // Keep your projectData exactly as it was, but with simpler descriptions
    const projectData = [
        {
            title: "Inventory System",
            type: "Full-Stack",
            description: "A simple app to keep track of products. You can add new items, edit details, and delete them from the list.",
            tags: ["React", "Node.js", "Express", "MongoDB"],
            github: "https://github.com/your-repo",
            live: "", // Kept empty so the button disappears
            image: inventory
        },
        {
            title: "Customer Manager (CRM)",
            type: "Full-Stack",
            description: "An app to save customer info like names and emails. It helps you manage your list of clients in one place.",
            tags: ["React", "Node.js", "Express", "MongoDB"],
            github: "https://github.com/mohd-faiz229/CRM-CustomerRelationalManagement-frontend.git",
            live: "https://crm-customer-relational-management.vercel.app/login",
            image: crm
        },
        {
            title: "Weather App",
            type: "Frontend",
            description: "A simple website that talks to a weather API. Type in a city name to see the current temperature.",
            tags: ["HTML", "CSS", "JavaScript", "API"],
            github: "https://github.com/mohd-faiz229/weather-app.git",
            live: "https://weather-app-ten-inky-83.vercel.app/",
            image: weather
        }
    ];

    return (
        <section id="projects" className="relative bg-[#020617] text-white py-24 px-6">
            <div className="max-w-6xl mx-auto">

                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-center md:text-left">
                        My <span className="text-blue-500">Projects</span>
                    </h2>
                    <p className="text-gray-400 text-sm mt-2 text-center md:text-left">
                        Here are a few things I have built while learning web development.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectData.map((project, index) => (
                        <div key={index} className="bg-slate-900 border border-white/10 rounded-xl overflow-hidden flex flex-col">

                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full aspect-video object-cover"
                            />

                            <div className="p-5 flex flex-col flex-grow">
                                <span className="text-[10px] text-blue-400 font-bold uppercase mb-2">{project.type}</span>
                                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-[10px] bg-white/5 px-2 py-1 rounded border border-white/10 uppercase">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 pt-4 border-t border-white/5">
                                    {/* GitHub Link */}
                                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs text-gray-300 hover:text-white">
                                        <RiGithubLine /> CODE
                                    </a>

                                    {/* BASIC CONDITION: Only shows if live is NOT an empty string */}
                                    {project.live !== "" && (
                                        <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs text-blue-500 hover:text-blue-400">
                                            <RiExternalLinkLine /> LIVE DEMO
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}