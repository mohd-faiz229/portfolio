import React from "react";
import { motion } from "framer-motion"; // The industry standard for React animations
import { RiReactjsLine, RiHtml5Line, RiCss3Line, RiNodejsLine, RiGithubLine } from "react-icons/ri";
import { TbBrandJavascript, TbBrandMongodb, TbBrandVscode, TbGitBranch } from "react-icons/tb";
import { SiExpress, SiPostman } from "react-icons/si";

export default function About() {
    const techStack = {
        frontend: [
            { name: "React", icon: <RiReactjsLine />, color: "text-cyan-400" },
            { name: "JavaScript", icon: <TbBrandJavascript />, color: "text-yellow-400" },
            { name: "HTML5", icon: <RiHtml5Line />, color: "text-orange-500" },
            { name: "CSS3", icon: <RiCss3Line />, color: "text-blue-500" },
        ],
        backend: [
            { name: "Node.js", icon: <RiNodejsLine />, color: "text-green-500" },
            { name: "Express.js", icon: <SiExpress />, color: "text-white" },
            { name: "MongoDB", icon: <TbBrandMongodb />, color: "text-green-600" },
        ],
        tools: [
            { name: "Git", icon: <TbGitBranch />, color: "text-orange-600" },
            { name: "GitHub", icon: <RiGithubLine />, color: "text-white" },
            { name: "Postman", icon: <SiPostman />, color: "text-orange-500" },
            { name: "VS Code", icon: <TbBrandVscode />, color: "text-blue-400" },
        ]
    };

    // Animation variants for the container to stagger the cards
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 } // Cards will appear one after another
        }
    };

    return (
        <section id="about" className="relative min-h-screen bg-[#020617] text-white px-6 py-28 overflow-hidden">
            <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-blue-600/10 blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mb-20"
                >
                    <h2 className="text-5xl md:text-7xl font-black tracking-tight">
                        ABOUT <span className="text-blue-600 underline decoration-blue-500/20">ME.</span>
                    </h2>
                    <p className="mt-8 text-gray-400 text-lg md:text-xl leading-relaxed font-light">
                        I'm <span className="text-white font-bold">Mohd Faiz</span>, a
                        <span className="text-blue-400 font-semibold"> Full Stack Developer</span>. I build
                        clean, functional applications using the MERN stack, focusing on
                        writing readable code and solving real-world problems.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                >
                    <StackCard title="Frontend" items={techStack.frontend} />
                    <StackCard title="Backend" items={techStack.backend} />
                    <StackCard title="Tools" items={techStack.tools} />
                </motion.div>
            </div>
        </section>
    );
}

function StackCard({ title, items }) {
    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <motion.div
            variants={cardVariants}
            className="group p-8 bg-white/5 border border-white/10 hover:border-blue-500/40 transition-colors duration-500 flex flex-col h-full rounded-2xl"
        >
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500 mb-8 flex items-center gap-2">
                <span className="w-4 h-[1px] bg-blue-500"></span> {title}
            </h3>
            <div className="grid grid-cols-2 gap-10 mt-auto">
                {items.map((item) => (
                    <motion.div
                        key={item.name}
                        whileHover={{ y: -5 }} // Subtle lift on hover
                        className="flex flex-col items-center group/icon"
                    >
                        <div className={`text-5xl ${item.color} opacity-80 group-hover/icon:opacity-100 transition-opacity duration-300`}>
                            {item.icon}
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-widest mt-4 text-gray-400 group-hover/icon:text-white transition-colors">
                            {item.name}
                        </span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}