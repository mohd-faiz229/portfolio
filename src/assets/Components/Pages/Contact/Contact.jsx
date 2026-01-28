import React from "react";
import { motion } from "framer-motion";
import { RiMailLine, RiPhoneLine, RiLinkedinLine, RiGithubLine } from "react-icons/ri";

export default function Contact() {
    // Container animation to stagger the cards
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    return (
        <section id="contact" className="relative bg-[#020617] text-white flex items-center justify-center px-6 py-32 overflow-hidden">

            {/* Background Accent */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[150px] -z-10" />

            <div className="max-w-5xl w-full mx-auto text-center">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
                        GET IN <span className="text-blue-600">TOUCH.</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto font-light leading-relaxed">
                        I'm currently open to <span className="text-white font-medium">Full Stack</span> opportunities.
                        Let's build something impactful together.
                    </p>
                </motion.div>

                {/* Contact Cards Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    <ContactCard
                        icon={<RiMailLine />}
                        label="Email"
                        value="mohdfaiz8406@gmail.com"
                        href="mailto:mohdfaiz8406@gmail.com"
                        color="group-hover:text-red-400"
                    />

                    <ContactCard
                        icon={<RiPhoneLine />}
                        label="Phone"
                        value="+91 9389823066"
                        href="tel:+919389823066"
                        color="group-hover:text-green-400"
                    />

                    <ContactCard
                        icon={<RiLinkedinLine />}
                        label="LinkedIn"
                        value="Connect with me"
                        href="https://www.linkedin.com/in/mohdfaiz229"
                        color="group-hover:text-blue-400"
                    />
                </motion.div>

                {/* Secondary Github Link - for completeness */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-16"
                >
                    <a
                        href="https://github.com/your-github-username"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm font-mono tracking-widest uppercase"
                    >
                        
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

function ContactCard({ icon, label, value, href, color }) {
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <motion.a
            variants={itemVariants}
            href={href}
            target={href.startsWith('http') ? "_blank" : "_self"}
            rel="noopener noreferrer"
            whileHover={{ y: -8 }}
            className="p-10 bg-white/5 border border-white/10 rounded-3xl hover:border-blue-500/40 transition-all duration-500 group flex flex-col items-center relative overflow-hidden"
        >
            {/* Subtle Inner Glow on Hover */}
            <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-colors duration-500" />

            <div className={`text-4xl text-gray-500 mb-6 transition-all duration-500 transform group-hover:scale-110 ${color}`}>
                {icon}
            </div>

            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500/60 mb-3 group-hover:text-blue-500 transition-colors">
                {label}
            </p>

            <p className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors truncate w-full">
                {value}
            </p>
        </motion.a>
    );
}