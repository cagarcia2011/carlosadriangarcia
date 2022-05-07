import React from 'react';
import './home.css';
import { useState } from 'react';
import useWindowDimensions from '../hooks/useWindowDimensions';

function Home() {

  const { width } = useWindowDimensions();
  const [IsAbout, setIsAbout] = useState(false);
  const [IsSkills, setIsSkills] = useState(false);
  const [IsProjects, setIsProjects] = useState(false);
  const [iconState, setIconState] = useState(true)

  const handleMenuClick = (e) => {
    setIsAbout(!IsAbout);
    setIsSkills(!IsSkills);
    setIsProjects(!IsProjects);
    setIconState(!iconState);
  }

  const handleMenuHoverIn = (setState) => {
    if (width >= 850) {
      setState(true);
    }
  }

  const handleMenuHoverOut = (setState) => {
    if (width >= 850) {
      setState(false)
    }
  }

  return (
    <div className="home-container">
      {width<=850 ? 
      <span className="material-symbols-rounded menu-icon" onClick={() => handleMenuClick()}>
      {iconState ? "menu" : "close"}
      </span> : <></>}
      <MenuItem onMouseEnter={() => handleMenuHoverIn(setIsAbout)} 
      onMouseLeave={() => handleMenuHoverOut(setIsAbout)}
      menuState={IsAbout} 
      menuText={IsAbout ? "About." : "Hello."} 
      cls="menu-item"/>
      <MenuItem onMouseEnter={() => handleMenuHoverIn(setIsSkills)} 
      onMouseLeave={() => handleMenuHoverOut(setIsSkills)}
      menuState={IsSkills} 
      menuText={IsSkills ? "Skills." : "I am"} 
      cls="menu-item accent"/>
      <MenuItem onMouseEnter={() => handleMenuHoverIn(setIsProjects)}
      onMouseLeave={() => handleMenuHoverOut(setIsProjects)}
      menuState={IsProjects} 
      menuText={IsProjects ? "Project." : "Carlos."} 
      cls="menu-item accent"/>
      <div className="title-container">
        <div className="title-wrapper">
          <h2 className="title-item upper-title">Mechanical Engineer</h2>
          <h2 className="title-item lower-title">Web Developer</h2>
        </div>
      </div>
    </div>
  )
}

const MenuItem = (props) => {

  return (
    <h1 className={props.cls} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
        {props.menuText}
    </h1>
  )
}

export default Home