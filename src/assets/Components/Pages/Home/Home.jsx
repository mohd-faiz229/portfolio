import React from "react";
import { motion } from "framer-motion";
import pfimage from "../Home/pfImage.png";

export default function Home() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
    };

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center bg-[#020617] px-6 py-20 overflow-hidden">

            {/* Animated Background Glows */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.15, 0.1]
                }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute top-0 right-0 w-96 h-96 bg-blue-600 blur-[100px] -z-10"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.05, 0.1, 0.05]
                }}
                transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900 blur-[100px] -z-10"
            />

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center md:text-left"
                >
                    <motion.div
                        variants={itemVariants}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6"
                    >
                        <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                        Always Learning & Building
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl lg:text-7xl font-black text-white mb-6"
                    >
                        MOHD <span className="text-blue-600">FAIZ.</span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="max-w-lg text-gray-400 text-lg mb-10 leading-relaxed mx-auto md:mx-0"
                    >
                        IT Graduate with hands-on experience in MERN-based projects.
                        I build full-stack web applications with a focus on clean logic
                        and modern user experiences.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                    >
                        <button
                            onClick={() => scrollToSection("projects")}
                            className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/20 active:scale-95"
                        >
                            VIEW PROJECTS
                        </button>
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="px-8 py-4 border border-white/10 bg-white/5 text-white font-bold rounded-xl hover:bg-white/10 transition-all active:scale-95"
                        >
                            GET IN TOUCH
                        </button>
                    </motion.div>
                </motion.div>

                {/* Image Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex justify-center"
                >
                    <motion.div
                        animate={{ y: [0, -15, 0] }} // Gentle floating effect
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="relative w-72 h-[420px] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group"
                    >
                        {/* Dark gradient to blend the bottom of your photo */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-10" />

                        <motion.img
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.4 }}
                            src={pfimage}
                            alt="Mohd Faiz"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}