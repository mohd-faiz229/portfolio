import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section
            id="contact"
            className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-6 py-20"
        >
            <div className="max-w-5xl w-full mx-auto">
                <h2 className="text-4xl font-bold text-center mb-10 text-white">
                    Contact <span className="text-purple-400">Me</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-10">
                    {/* Contact Info */}
                    <div className="flex flex-col justify-center space-y-6">
                        <p className="text-lg text-gray-300">
                            <b className="text-purple-400 text-xl"> Got </b>a project in mind or want to collaborate <b className="text-purple-400">?</b>
                            <div className=" font-bold" >  Let’s talk  <b className="text-purple-400">!</b></div>
                          
                        </p>
                        <div className="flex items-center gap-4">
                            <FaEnvelope className="text-purple-400 text-xl" />
                            <a
                                href="mailto:faizkhan@gmail.com"
                                className="text-gray-300 hover:text-purple-400 transition"
                            >
                                faizkhan@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaPhoneAlt className="text-purple-400 text-xl" />
                            <a
                                href="tel:+919876543210"
                                className="text-gray-300 hover:text-purple-400 transition"
                            >
                                +91 98765 43210
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="bg-[#111] p-8 rounded-2xl shadow-lg space-y-6 border border-gray-800"
                    >
                        <div>
                            <label className="block mb-2 text-sm text-gray-400">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                className="w-full px-4 py-2 rounded-lg bg-transparent border border-gray-700 text-white focus:border-purple-400 outline-none"
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm text-gray-400">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 rounded-lg bg-transparent border border-gray-700 text-white focus:border-purple-400 outline-none"
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm text-gray-400">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                placeholder="Write your message..."
                                className="w-full px-4 py-2 rounded-lg bg-transparent border border-gray-700 text-white focus:border-purple-400 outline-none resize-none"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 rounded-lg bg-purple-500 hover:bg-purple-600 transition text-black font-semibold"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
