import React from 'react'
import Home from "./assets/Components/Pages/Home/Home"
import Header from "./assets/Components/Header/Header"
import About from "./assets/Components/Pages/About/About"
import Contact from "./assets/Components/Pages/Contact/Contact"
import Education from './assets/Components/Pages/Education/Education'
import Projects from "./assets/Components/Pages/Projects/Projects"


const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Projects />
      <Education />
      <Contact />
      


    </div>
  )
}

export default App
