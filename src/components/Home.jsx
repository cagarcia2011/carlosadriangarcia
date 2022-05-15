import React, { useState }  from 'react';
import { motion } from "framer-motion";
import './home.css';
//import useWindowDimensions from '../hooks/useWindowDimensions';

const menuItemAnimation = {
  invisibleState: {
    opacity: 0,
    x: 0,
    display: 'none',
  },
  visibleState: {
    x: 5,
    opacity: 1,
    scale: 1,
    display: 'block',
  },
}

const headerItemAnimation = {
  visibleState: {
    opacity: 1,
    display: 'block',
  },
  invisibleState: {
    opacity: 0,
    x: 5,
    display: 'none',
  }
}

function Home() {

  //const { height, width } = useWindowDimensions();
  const isTouchDevice = () => {  
    return (('ontouchstart' in window) ||  
      (navigator.maxTouchPoints > 0) ||  
      (navigator.msMaxTouchPoints > 0));  
  }  
  const [isTouchScreen, setIsTouchScreen] = useState(isTouchDevice());
  const [TouchMenu, setTouchMenu] = useState(false);
  
  window.addEventListener('resize', () => {
    setIsTouchScreen(isTouchDevice());
  });
  
  const [IsAbout, setIsAbout] = useState(false);
  const [IsSkills, setIsSkills] = useState(false);
  const [IsProjects, setIsProjects] = useState(false);
  const [iconState, setIconState] = useState(true);

  const handleMenuClick = (e) => {
    setIsAbout(!IsAbout);
    setIsSkills(!IsSkills);
    setIsProjects(!IsProjects);
    setIconState(!iconState);
    setTouchMenu(isTouchScreen ? !IsAbout : false)
  }

  return (
    <div className="home-container">
      {isTouchScreen ? 
      <span className="material-symbols-rounded menu-icon" onClick={(e) => handleMenuClick(e)}>
      {iconState ? "menu" : "close"}
      </span> : <></>}
      <MenuItem text={'Hello.'} textHovered={'LinkedIn.'} isHovered={IsAbout} setIsHovered={setIsAbout} className='menu-item'>
      </MenuItem>
      <MenuItem text={'I am'} textHovered={'LinkedIn.'} isHovered={IsSkills} setIsHovered={setIsSkills} className='menu-item accent'>
      </MenuItem>
      <MenuItem text={'Carlos.'} textHovered={'LinkedIn.'} isHovered={IsProjects} setIsHovered={setIsProjects} className='menu-item accent'>
      </MenuItem>
      <div className="title-container">
        {!TouchMenu ? 
        <div className="title-wrapper">
          <h2 className="title-item upper-title">Mechanical Engineer</h2>
          <h2 className="title-item lower-title">Web Developer</h2>
        </div> : <></>}
      </div>
    </div>
  )
}

const MenuItem = ({text, textHovered, isHovered, setIsHovered, ...props}) => {

  function handleItemClick(e) {
    window.open("https://www.linkedin.com/in/carlos-a-garcia32/", "_blank");
  }

  return (
    <motion.div
      onHoverStart={() => {
        setIsHovered(true)
      }}
      onHoverEnd={() => {
        setIsHovered(false)
      }}>
      
      {isHovered && (
        <motion.h1 
        {...props}
        variants={menuItemAnimation}
        initial="invisibleState"
        animate="visibleState"
        onClick= {(e) => handleItemClick(e)}>
          {textHovered}
        </motion.h1>
      )}
      {!isHovered && (
        <motion.h1 
        {...props}
        variants={headerItemAnimation}
        initial="invisibleState"
        animate="visibleState">
          {text}
        </motion.h1>
      )}
    </motion.div>
  )
}

export default Home