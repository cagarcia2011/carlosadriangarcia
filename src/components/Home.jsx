import React from 'react'
import './home.css'
import { useState } from 'react';

function Home() {

  const [IsAbout, setIsAbout] = useState(false);
  const [IsSkills, setIsSkills] = useState(false);
  const [IsProjects, setIsProjects] = useState(false);

  return (
    <div class="home-container">
        <h1 class="menu-item" 
        onMouseEnter={() => setIsAbout(true)} 
        onMouseLeave={() => setIsAbout(false)}>
          {IsAbout ? "About." : "Hello."}
        </h1>
        <h1 class="accent menu-item"
        onMouseEnter={() => setIsSkills(true)}
        onMouseLeave={() => setIsSkills(false)}>
          {IsSkills ? "Skills." : "I am"}
        </h1>
        <h1 class="accent menu-item"
        onMouseEnter={() => setIsProjects(true)}
        onMouseLeave={() => setIsProjects(false)}>
          {IsProjects ? "Projects." : "Carlos"}
        </h1>
        <div className="title-container">
          <div className="title-wrapper">
            <h2 className="title-item upper-title">Mechanical Engineer</h2>
            <h2 className="title-item lower-title">Web Developer</h2>
          </div>
        </div>
    </div>
  )
}

export default Home