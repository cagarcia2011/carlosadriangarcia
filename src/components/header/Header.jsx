import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Pic1.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <div className="greeting__container">
          <span className="header__letter greeting__letter">H</span>
          <span className="header__letter greeting__letter">i</span>
          <span className="header__letter greeting__letter">,</span>
          <>  </>
          <span className="header__letter greeting__letter">I</span>
          <span className="header__letter greeting__letter">'</span>
          <span className="header__letter greeting__letter">m</span>
          <br />
          <span className="header__letter name__letter initial">C</span>
          <span className="header__letter name__letter">a</span>
          <span className="header__letter name__letter">r</span>
          <span className="header__letter name__letter">l</span>
          <span className="header__letter name__letter">o</span>
          <span className="header__letter name__letter">s</span>
          <>  </>
          <span className="header__letter name__letter initial">A</span>
          <span className="header__letter name__letter">d</span>
          <span className="header__letter name__letter">r</span>
          <span className="header__letter name__letter">i</span>
          <span className="header__letter name__letter">a</span>
          <span className="header__letter name__letter">n</span>
          <>  </>
          <span className="header__letter name__letter initial">G</span>
          <span className="header__letter name__letter">a</span>
          <span className="header__letter name__letter">r</span>
          <span className="header__letter name__letter">c</span>
          <span className="header__letter name__letter">i</span>
          <span className="header__letter name__letter">a</span>
          <h4 className="text-light titles">
            Engineer ~ Python Developer ~ Web Developer
          </h4>
          <HeaderSocials />
          <CTA />
        </div>
       <div className="img-container">
          <a href="#about" className="img_anchor">
            <div className="me">
              <img className="me-img" src={ME} alt="Me" />
            </div>
          </a>
       </div>
      </div>
    </header>
  )
}

export default Header