import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./assets/Components/Header";
import Home from "./assets/Components/Pages/Home/Home";
import About from "./assets/Components/Pages/About/About";
import Projects from "./assets/Components/Pages/Projects/Projects";
import Contact from "./assets/Components/Pages/Contact/Contact";
import Footer from "./assets/Components/Footer";
import ScrollToTop from "./ScrollToTop";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-slate-900 text-white min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>

      
        <Footer />
      </div>
    </Router>
  );
}
