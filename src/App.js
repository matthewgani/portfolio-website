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
    </div>
  )

  // return (
  //   <div>
  //     <div className="Nav-bar">
  //       <Link style={padding} to="/">home</Link>
  //       <Link style={padding} to="/projects">projects</Link>
  //       <Link style={padding} to="/blogs">blogs</Link>
  //       <a style={padding}href="https://github.com/matthewgani" target="_blank" rel="noreferrer">GitHub</a>
  //       <a style={padding}href="https://www.linkedin.com/in/matthewgani/" target="_blank" rel="noreferrer">LinkedIn</a>
  //     </div>

  //     <Routes>
  //       <Route path="/projects" element={<Projects />} />
  //       <Route path="/blogs" element={<Blogs />} />
  //       <Route path="/" element={<Home />} />
  //       {/*education section, work experience */}
  //     </Routes>

  //     <div className="Footer" style={footerPadding}>
  //       <i>Matthew Gani's Portfolio Website 2022</i>
  //     </div>
  //   </div>
  // )
}

export default App
