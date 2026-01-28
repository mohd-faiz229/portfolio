import React from 'react';
import { motion } from "framer-motion";
import Home from "./assets/Components/Pages/Home/Home";
import Header from "./assets/Components/Header/Header";
import About from "./assets/Components/Pages/About/About";
import Contact from "./assets/Components/Pages/Contact/Contact";
import Education from './assets/Components/Pages/Education/Education';
import Projects from "./assets/Components/Pages/Projects/Projects";
import Footer from './assets/Components/Footer/Footer';

const App = () => {
  return (
    <div className="bg-[#020617] selection:bg-blue-500/30">
      <Header />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Home />
        <About />
        <Projects />
        <Education />
        <Contact />
      </motion.main>

      <Footer />
    </div>
  );
};

export default App;