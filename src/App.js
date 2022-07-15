// import {
//   Routes, Route, Link
// } from "react-router-dom"

// import Blogs from "./components/Blogs"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Education from "./components/Education"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Work from "./components/Work"
import Footer from "./components/Footer"

const App = () => {

  return (
    <div>
      <NavBar/>
      <Home />
      <Education />
      <Work />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
