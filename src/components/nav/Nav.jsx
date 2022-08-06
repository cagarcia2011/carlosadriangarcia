import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { FiUser } from 'react-icons/fi'
import { MdWorkOutline } from 'react-icons/md'
import { BsListCheck } from 'react-icons/bs'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { BiMessageSquareDetail } from 'react-icons/bi'
import {useState} from 'react'
// import {useScrollPosition} from '../../hooks/useScrollPosition.js'

function Nav() {
  const [activeNav, setActiveNav] = useState('#home')

  // const scrollPosition = useScrollPosition()

  // useEffect(() => {
  //   let prevScrollPos = window.scrollY

  //   const setActivePosition = (pos) => {
  //     if (pos < 600) {setActiveNav('#home')}
  //     else if (pos < 1900) {setActiveNav('#about')}
  //     else if (pos < 3000) {setActiveNav('#skills')}
  //     else if (pos < 4200) {setActiveNav('#experience')}
  //     else if (pos < 5400) {setActiveNav('#portfolio')}
  //     else {setActiveNav('#contact')}
  //   }

  //   const scrolledMoreThanThreshold = (currentScrollYPosition) =>
  //     Math.abs(currentScrollYPosition - prevScrollPos) > 10;

  //     const updatePosition = () => {
  //       const currentScrollYPosition = window.scrollY;
  //       if (scrolledMoreThanThreshold(currentScrollYPosition)) {
  //         setActivePosition(currentScrollYPosition)
  //       }
  //     }

  //   const onScroll = () => window.requestAnimationFrame(updatePosition);

  //   window.addEventListener("scroll", onScroll);

  //   return () => window.removeEventListener("scroll", onScroll);

  // }, [])

  return (
    <nav>
      <a href="#home"
      onClick={() => setActiveNav('#home')}
      className={activeNav === '#home' ? 'active': ''}><AiOutlineHome /></a>
      <a href="#about"
      onClick={() => setActiveNav('#about')}
      className={activeNav === '#about' ? 'active' : ''}><FiUser /></a>
      <a href="#skills"
      onClick={() => setActiveNav('#skills')}
      className={activeNav === '#skills' ? 'active' : ''}><BsListCheck /></a>
      <a href="#experience"
      onClick={() => setActiveNav('#experience')}
      className={activeNav === '#experience' ? 'active' : ''}><MdWorkOutline /></a>
      <a href="#portfolio"
      onClick={() => setActiveNav('#portfolio')}
      className={activeNav === '#portfolio' ? 'active' : ''}><AiOutlineFundProjectionScreen /></a>
      <a href="#contact"
      onClick={() => setActiveNav('#contact')}
      className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav