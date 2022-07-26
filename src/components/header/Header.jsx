import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Pic1.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container" id="home">
        <h3>Hi I'm</h3>
      <h1>Carlos Garcia</h1>
        <h3 className="text-light">
          Engineer / Web Dev / Python Dev
        </h3>
        <HeaderSocials />
        <CTA />
        <div className="me">
          <img src={ME} alt="Me" />
        </div>
      </div>
    </header>
  )
}

export default Header