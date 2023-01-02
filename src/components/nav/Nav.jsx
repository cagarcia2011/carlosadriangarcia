import React from 'react'
import {useState} from 'react'

import { useNavigate, useLocation } from 'react-router-dom'

import './nav.css'

import { AiOutlineHome } from 'react-icons/ai'
import { FiUser } from 'react-icons/fi'
import { useEffect } from 'react'
// import { MdWorkOutline } from 'react-icons/md'
// import { BsListCheck } from 'react-icons/bs'
// import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
// import { BiMessageSquareDetail } from 'react-icons/bi'

function Nav() {
  const [activeNav, setActiveNav] = useState('/')
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    setActiveNav(location.pathname)
  }, [location.pathname])

  return (
    <nav>
      <a href='/'
      onClick={(e) => {
        e.preventDefault()
        navigate('/');
      }}
      className={activeNav === '/' ? 'active': ''}><AiOutlineHome /></a>
      <a href="/about"
      onClick={(e) => {
        e.preventDefault()
        navigate('/about')
      }}
      className={activeNav === '/about' ? 'active' : ''}><FiUser /></a>
      {/* <a href="#skills"
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
      className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a> */}
    </nav>
  )
}

export default Nav