import React from 'react'
import Home from "./assets/Components/Pages/Home/Home"
import Header from "./assets/Components/Header/Header"
import About from "./assets/Components/Pages/About/About"
import Contact from "./assets/Components/Pages/Contact/Contact"
import Education from './assets/Components/Pages/Education/Education'
import Projects from "./assets/Components/Pages/Projects/Projects"
import Footer from './assets/Components/Footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <main>
        {/* No Routes here! We want everything to render in order */}
        <div id="home"><Home /></div>
        <div id="about"><About /></div>
        <div id="projects"><Projects /></div>
        <div id="education"><Education /></div>
        <div id="contact"><Contact /></div>
      </main>
      <Footer />

    </>
  )
}

export default App