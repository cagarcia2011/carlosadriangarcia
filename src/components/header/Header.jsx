import React from 'react'
import { useNavigate } from 'react-router-dom'

import './header.css'
import ME from '../../assets/Pic1.png'
import Greeting from './Greeting'

const Header = () => {
  const navigate = useNavigate()

  return (
    <header id="home">
      <div className="container header__container">
        <Greeting />
       <div className="img-container">
          <a href="/about" className="img_anchor" onClick={(e) => {
            e.preventDefault()
            navigate('/about')
          }}>
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