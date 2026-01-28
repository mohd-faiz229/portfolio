import React from "react";
import { RiMailLine, RiPhoneLine, RiGithubLine, RiLinkedinLine } from "react-icons/ri";

export default function Contact() {
    return (
        <section id="contact" className="relative bg-[#020617] text-white flex items-center justify-center px-6 py-24">
            <div className="max-w-4xl w-full mx-auto text-center">

                {/* Header */}
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        Get In <span className="text-blue-500">Touch</span>
                    </h2>
                    <p className="text-gray-400 text-base max-w-md mx-auto leading-relaxed">
                        I’m currently looking for new opportunities.
                        Reach out via email, phone, or LinkedIn.
                    </p>
                </div>

                {/* Contact Cards Grid - Now 3 Columns for Email, Phone, LinkedIn */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Email Card */}
                    <ContactCard
                        icon={<RiMailLine />}
                        label="Email"
                        value="mohdfaiz8406@gmail.com"
                        href="mailto:mohdfaiz8406@gmail.com"
                    />

                    {/* Phone Card */}
                    <ContactCard
                        icon={<RiPhoneLine />}
                        label="Phone"
                        value="+91 9389823066"
                        href="tel:+919389823066"
                    />

                    {/* LinkedIn Card */}
                    <ContactCard
                        icon={<RiLinkedinLine />}
                        label="LinkedIn"
                        value="Connect with me"
                        href="https://www.linkedin.com/in/mohdfaiz229"
                    />
                </div>
            </div>
        </section>
    );
}

function ContactCard({ icon, label, value, href }) {
    return (
        <a
            href={href}
            target={href.startsWith('http') ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="p-8 bg-slate-900/40 border border-white/5 rounded-2xl hover:border-blue-500/30 transition-all group flex flex-col items-center"
        >
            <div className="text-3xl text-blue-500 mb-4 group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">{label}</p>
            <p className="text-sm font-medium text-gray-200">{value}</p>
        </a>
    );
}
