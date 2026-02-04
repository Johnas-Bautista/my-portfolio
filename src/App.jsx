import { Button } from "@/components/ui/button"
import { useState } from "react"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {
  return (
    <>
    <Navbar />
    <Home />
    <About />
    <Projects />
    <Contact />
    </>
  )
}

export default App