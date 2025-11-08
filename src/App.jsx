import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./assets/Components/Header";
import Home from "./assets/Components/Pages/Home/Home";
import About from "./assets/Components/Pages/About/About";
import Projects from "./assets/Components/Pages/Projects/Projects";
import Contact from "./assets/Components/Pages/Contact/Contact";
import Footer from "./assets/Components/Footer";

function ScrollToSection() {
  const location = useLocation();

  React.useEffect(() => {
    const section = location.pathname.replace("/", "") || "home";
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return null;
}

export default function App() {
  return (
    <Router>
      <div className="bg-slate-900 text-white min-h-screen">
        <Header />
        <ScrollToSection />

        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>

        <Footer />
      </div>
    </Router>
  );
}
