import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { FiUser } from 'react-icons/fi'
import { MdWorkOutline } from 'react-icons/md'
import { BsListCheck } from 'react-icons/bs'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { BiMessageSquareDetail } from 'react-icons/bi'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home')


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