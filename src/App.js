import {
  Routes, Route, Link
} from "react-router-dom"

import Blogs from "./components/Blogs"
import Projects from "./components/Projects"
import Home from "./components/Home"
import NavBar from "./components/NavBar"

const App = () => {

  const padding = {
    padding: 5
  }

  const footerPadding = {
    position: "fixed",
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "red"
  }

  return (
    <div>
      <NavBar/>
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
