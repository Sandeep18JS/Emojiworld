import About from "./components/About"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <Router>
        <div className="w-screen h-screen	bg-cover bg-no-repeat bg-center bg-[#b4b4b4]">
          <Navbar />
          <Hero />
          <About />
          {/* <Contact /> */}
        </div>
      </Router>

    </>
  )
}



export default App
