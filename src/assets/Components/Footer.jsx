import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";


export default function Footer() {
    return (
        <footer className="bg-slate-950 text-gray-400 py-6 border-t border-slate-800">
            <div className="max-w-5xl mx-auto text-center">
                <p className="text-sm mb-3">
                    © {new Date().getFullYear()} Mohd Faiz. All rights reserved.
                </p>

                <div className="flex justify-center gap-6">
                    {/* GitHub */}
                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-purple-400 transition flex items-center gap-2"
                    >
                        
                        GitHub
                        <FaGithub />
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-purple-400 transition flex items-center gap-2"
                    >
                        LinkedIn
                        
                        <FaLinkedinIn />
                    </a>
                </div>
            </div>
        </footer>
    );
}
