import { Button } from "@/components/ui/button"
import { useState } from "react"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Projects from "./components/Projects"

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <Navbar />
    <Home />
    <About />
    <Projects />
    </>

  )
}

export default App