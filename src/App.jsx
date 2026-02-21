import { Button } from "@/components/ui/button"
import { useState, useRef } from "react"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

 const scrollToSection = (elementRef) => {
  if (elementRef && elementRef.current) {
    elementRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start', // Align the top of the section with the top of the screen
    });
  }
};

  return (
    <div>
      <Navbar scrollToSection={scrollToSection} refs={{homeRef, aboutRef, projectsRef, contactRef}}/>
      <Home ref={homeRef}/>
      <About ref={aboutRef}/>
      <Projects ref={projectsRef}/>
      <Contact ref={contactRef}/>
    </div>
  )
}

export default App