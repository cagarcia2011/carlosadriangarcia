import React from 'react'
import { BsLinkedin, BsFacebook} from 'react-icons/bs'
function HeaderSocials() {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/carlos-a-garcia32/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://www.facebook.com/carlosadrian.garcia.98" target="_blank" rel="noreferrer"><BsFacebook /></a>
    </div>
  )
}

export default HeaderSocials