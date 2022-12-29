import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import About from "./components/about/About"
// import Skills from "./components/skills/Skills"
// import Experience from "./components/experience/Experience"
// import Portfolio from "./components/portfolio/Portfolio"
// import Contact from "./components/contact/Contact"
// import Footer from "./components/footer/Footer"

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Header />} exact />
        <Route path='/about' element={<About />} exact />
      </Routes>
      <Nav />
      {/* <Skills />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer /> */}
    </Router>
  );
}

export default App;
