import React from 'react'
import './about.css'
import {FaGraduationCap} from 'react-icons/fa'
import {MdWork} from 'react-icons/md'
import LOGO from '../../assets/CAG-Logo.png'

function About() {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__columns">
          <div className="about__summary">
            <h1>About Me</h1>
            <p>
              I am a creative, enthusiastic, and innovative Engineer and self-taught developer 
              with a background in Manufacturing, Python development, Data Science and Web development.
              Excellent at collaborating in a multifunctional team environment to reach 
              project goals and deliverables.
            </p>
            <div className="logo__container">
              <img src={LOGO} alt="My Logo" className="logo" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <div className="about__card">
                <div className="card-bg"></div>
                <div className="about__card-content">
                  <FaGraduationCap className='about__icon' />
                  <h4>Bachelor of Science in Engineering</h4>
                  <h5>Magna Cum Laude ~ GPA: 3.92</h5>
                  <h5>Aug 2014 ~ May 2020</h5>
                </div>
              </div>
              <div className="about__card">
                <div className="card-bg"></div>
                <div className="about__card-content">
                  <MdWork className='about__icon' />
                  <h4>Manufacturing Engineer</h4>
                  <h5>Data Engineering Projects</h5>
                  <h5>Aug 2021 ~ Present</h5>
                </div>
              </div>
              {/* <div className="about__card">
                <div className="card-bg"></div>
                <div className="about__card-content">
                  <MdWork className='about__icon' />
                  <h4>Self-Taught Developer</h4>
                  <h5>Python Development</h5>
                  <h5>Web Development</h5>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About