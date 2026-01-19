import React from "react";
// Importing more stable icon sets (Remix and Tabler)
import { RiReactjsLine, RiHtml5Line, RiCss3Line, RiNodejsLine, RiGithubLine } from "react-icons/ri";
import { TbBrandJavascript, TbBrandMongodb, TbBrandGithub, TbBrandVscode, TbGitBranch, TbApi } from "react-icons/tb";

export default function About() {
    const techStack = {
        frontend: [
            { name: "React", icon: <RiReactjsLine />, color: "hover:text-cyan-400" },
            { name: "JavaScript", icon: <TbBrandJavascript />, color: "hover:text-yellow-400" },
            { name: "HTML5", icon: <RiHtml5Line />, color: "hover:text-orange-500" },
            { name: "CSS3", icon: <RiCss3Line />, color: "hover:text-blue-500" },
        ],
        backend: [
            { name: "Node.js", icon: <RiNodejsLine />, color: "hover:text-green-500" },
            { name: "Express", icon: <TbApi />, color: "hover:text-gray-400" }, // Using API icon for Express
            { name: "MongoDB", icon: <TbBrandMongodb />, color: "hover:text-green-600" },
        ],
        tools: [
            { name: "Git", icon: <TbGitBranch />, color: "hover:text-orange-600" },
            { name: "GitHub", icon: <RiGithubLine />, color: "hover:text-white" },
            { name: "Postman", icon: <TbApi />, color: "hover:text-orange-400" },
            { name: "VS Code", icon: <TbBrandVscode />, color: "hover:text-blue-400" },
        ]
    };

    return (
        <section id="about" className="relative min-h-screen bg-[#020617] text-white px-6 py-28 overflow-hidden">
            {/* Background geometric accent */}
            <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-blue-600/10 blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-5xl md:text-7xl font-black tracking-tight relative z-10">
                            ABOUT <span className="text-blue-600 underline decoration-blue-500/20">ME.</span>
                        </h2>
                        <p className="mt-8 text-gray-400 text-lg md:text-xl leading-relaxed font-light">
                            I'm <span className="text-white font-bold">Mohd Faiz</span>, a
                            <span className="text-blue-400 font-semibold"> MERN Stack Developer</span> building scalable
                            Full-Stack applications.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <StackCard title="Frontend Architecture" items={techStack.frontend} />
                    <StackCard title="Server & Database" items={techStack.backend} />
                    <StackCard title="Dev Tools & Workflow" items={techStack.tools} />
                </div>
            </div>
        </section>
    );
}

function StackCard({ title, items }) {
    return (
        <div className="group p-8 bg-white/5 border border-white/10 hover:border-blue-500/40 transition-all duration-500 flex flex-col h-full">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500 mb-8 flex items-center gap-2">
                <span className="w-4 h-[1px] bg-blue-500"></span> {title}
            </h3>
            <div className="grid grid-cols-2 gap-10 mt-auto">
                {items.map((item) => (
                    <div key={item.name} className="flex flex-col items-center group/icon">
                        <div className={`text-5xl text-gray-600 transition-all duration-300 transform group-hover/icon:scale-110 ${item.color}`}>
                            {item.icon}
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-widest mt-4 text-gray-500 group-hover/icon:text-white transition-colors">
                            {item.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}