import { Button } from "@/components/ui/button"
import { useState, useRef } from "react"
import HeroNew from "./components/HeroNew"
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
  const projectsRef = useRef(null);
  const labsRef = useRef(null);
  const certificationsRef = useRef(null);

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
        refs={{homeRef, aboutRef, projectsRef, labsRef, certificationsRef}}
      />
      <HeroNew ref={homeRef}/>
      <About ref={aboutRef}/>
      <Skills />
      <Projects ref={projectsRef}/>
      <SecurityLabs ref={labsRef}/>
      <Certifications ref={certificationsRef}/>
      <Awards />
      <Contact />
    </div>
  )
}

export default App