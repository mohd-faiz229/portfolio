import React from "react";
import { RiMailLine, RiPhoneLine, RiGithubLine, RiLinkedinLine, RiMapPinLine } from "react-icons/ri";

export default function Contact() {
    return (
        <section id="contact" className="relative bg-[#020617] text-white flex items-center justify-center px-6 py-24">
            <div className="max-w-4xl w-full mx-auto text-center">

                {/* Clean Header */}
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        Get In <span className="text-blue-500">Touch</span>
                    </h2>
                    <p className="text-gray-400 text-base max-w-md mx-auto leading-relaxed">
                        I’m currently looking for new opportunities and my inbox is always open.
                        Whether you have a question or just want to say hi, I’ll get back to you!
                    </p>
                </div>

                {/* Contact Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Email Card */}
                    <ContactCard
                        icon={<RiMailLine />}
                        label="Email Me"
                        value="faizkhan@gmail.com"
                        href="mailto:faizkhan@gmail.com"
                    />

                    {/* Phone Card */}
                    <ContactCard
                        icon={<RiPhoneLine />}
                        label="Call Me"
                        value="+91 98765 43210"
                        href="tel:+919876543210"
                    />

                    {/* Location Card */}
                    <ContactCard
                        icon={<RiMapPinLine />}
                        label="Location"
                        value="Saharanpur, India"
                    />
                </div>

                {/* Social Links Sub-Section */}
                <div className="mt-16 pt-8 border-t border-white/5">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-6">Social Profiles</p>
                    <div className="flex justify-center gap-8">
                        <SocialLink href="https://github.com/your-github" icon={<RiGithubLine />} label="GitHub" />
                        <SocialLink href="https://linkedin.com/in/your-linkedin" icon={<RiLinkedinLine />} label="LinkedIn" />
                    </div>
                </div>
            </div>
        </section>
    );
}

// Simple Card Component
function ContactCard({ icon, label, value, href }) {
    const Content = () => (
        <div className="p-6 bg-slate-900/40 border border-white/5 rounded-2xl hover:border-blue-500/30 transition-all group h-full flex flex-col items-center">
            <div className="text-2xl text-blue-500 mb-4 group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1">{label}</p>
            <p className="text-sm font-medium text-gray-200">{value}</p>
        </div>
    );

    return href ? (
        <a href={href} className="block">{Content()}</a>
    ) : (
        <div>{Content()}</div>
    );
}

// Minimal Social Link
function SocialLink({ href, icon, label }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-blue-500 transition-colors group"
        >
            <span className="text-xl">{icon}</span>
            <span className="text-sm font-medium">{label}</span>
        </a>
    );
}