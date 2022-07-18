import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Pic1.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4>Hi I'm</h4>
        <h1>Carlos Garcia</h1>
        <h4 className="text-light">Developer & Engineer</h4>
        <CTA />

        <div className="me">
          <img src={ME} alt="Me" />
        </div>

        <a href="#contact" className="scroll__down">Sroll Down</a>
        <HeaderSocials />
      </div>
    </header>
  )
}

export default Header