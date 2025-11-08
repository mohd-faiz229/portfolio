import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav className="flex justify-between items-center px-8 py-4 bg-slate-800 shadow-md relative">
            <h1 className="text-2xl font-bold text-white">Faiz Portfolio</h1>

            {/* Desktop Nav */}
            <ul className="hidden md:flex gap-6">
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <Link
                            to={link.path}
                            className="text-gray-300 hover:text-white transition duration-200"
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-gray-300 hover:text-white"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            {/* Mobile Nav Menu */}
            {menuOpen && (
                <ul className="absolute top-16 left-0 w-full bg-slate-800 flex flex-col items-center gap-4 py-6 md:hidden shadow-lg z-50">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                to={link.path}
                                className="text-gray-300 hover:text-white text-lg transition duration-200"
                                onClick={() => setMenuOpen(false)} // Close menu after click
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
