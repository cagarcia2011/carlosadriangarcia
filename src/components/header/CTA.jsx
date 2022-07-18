import React from 'react'
//import Resume from '../assets/resume.pdf'

function CTA() {
    //Add download attribute to a and the Resume object to href:
    //<a href="Resume" download>Download CV</a>
  return (
    <div className="cta">
        <a href="#contact" className="btn btn-primary">Download CV</a>
        <a href="https://www.linkedin.com/in/carlos-a-garcia32/" target="_blank" rel="noreferrer" className="btn">Contact Me</a>
    </div>
  )
}

export default CTA