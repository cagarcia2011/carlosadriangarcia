import React from 'react'
import Resume from '../../assets/Carlos-Garcia-Resume-08-22.pdf'

function CTA() {
    //Add download attribute to a and the Resume object to href:
    //<a href="Resume" download>Download CV</a>
  return (
    <div className="cta">
        <a href={Resume} download className="btn btn-primary">Download CV</a>
        <a href="https://www.linkedin.com/in/carlos-a-garcia32/" target="_blank" rel="noreferrer" className="btn">Contact Me</a>
    </div>
  )
}

export default CTA