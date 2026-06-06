import { Button } from "@/components/ui/button"
import { useState, useRef } from "react"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import SecurityLabs from "./components/SecurityLabs"
import Certifications from "./components/Certifications"
import Awards from "./components/Awards"
import Contact from "./components/Contact"

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const labsRef = useRef(null);
  const certificationsRef = useRef(null);
  const awardsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (elementRef) => {
    if (elementRef && elementRef.current) {
      elementRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div>
      <Navbar 
        scrollToSection={scrollToSection} 
        refs={{homeRef, aboutRef, skillsRef, projectsRef, labsRef, certificationsRef, awardsRef, contactRef}}
      />
      <Home ref={homeRef}/>
      <About ref={aboutRef}/>
      <Skills ref={skillsRef}/>
      <Projects ref={projectsRef}/>
      <SecurityLabs ref={labsRef}/>
      <Certifications ref={certificationsRef}/>
      <Awards ref={awardsRef}/>
      <Contact ref={contactRef}/>
    </div>
  )
}

export default App