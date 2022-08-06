import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Pic1.png'
import HeaderSocials from './HeaderSocials'
import Typical from 'react-typical'

const Header = () => {
  return (
    <header>
      <div className="container header__container" id="home">
        <h4>Hi I'm</h4>
        <h1>Carlos Garcia</h1>
        <h4 className="text-light">
          <Typical 
            loop={Infinity}
            steps={[
                "Engineer",
                1000,
                "Web Dev",
                1000,
                "Python Dev",
                1000
            ]}
          />
        </h4>
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