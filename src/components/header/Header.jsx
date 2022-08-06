import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Pic1.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container" id="home">
        <h4>Hi I'm</h4>
        <h1>Carlos Garcia</h1>
        <h4 className="text-light">
          Engineer / Python Dev / Web Dev
        </h4>
        <HeaderSocials />
        <CTA />
       <div className="img-container">
          <div className="me">
            <img src={ME} alt="Me" />
          </div>
       </div>
      </div>
    </header>
  )
}

export default Header