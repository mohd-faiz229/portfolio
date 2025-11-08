import React from "react";

import w from "../../../../assets/images/weather_APP.png";




import t from "../../../../assets/images/to-do.png"
import s from "../../../../assets/images/samsang.png"
export default function Projects() {
    const projects = [

        {
            id: 1,
            title: "Weather App",
            description: "Real-time weather tracking using OpenWeather API and React.",
            image: w,

        },
        {
            id: 2,
            title: "Samsung clone",
            description: " Samsung Website Landing Page Clone",
            image: s,
            liveLink: "https://samsung-websiite-clone.vercel.app/",
            githubLink: "#",
        },


        {

            id: 4,
            title: "To-do List",
            description: "E-commerce front-end built using React and context API.",
            image: t,
            liveLink: "https://to-do-list-cyan-alpha-10.vercel.app/",
            githubLink: "#"
        }

    ];

    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-between bg-slate-900 text-white pt-20 px-6"
        >
            <div className="max-w-7xl w-full mx-auto">
                <h1 className="text-4xl font-bold mb-10 text-center text-purple-400">
                    Projects
                </h1>

                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 place-items-center">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-purple-500/40 transition-all duration-300 w-full max-w-sm"
                        >
                            {/* Image */}
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-5 flex flex-col justify-between h-full">
                                <h2 className="text-2xl font-semibold mb-2">
                                    {project.title}
                                </h2>
                                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex justify-between items-center mt-auto">
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-all text-sm"
                                    >
                                        Live Demo
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
