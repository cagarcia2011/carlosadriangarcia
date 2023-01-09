import React from 'react'

import TransitionComponent from '../transitions/TransitionComponent'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

function getSpanList(message, cls, highlightInitials=false) {
    let emptySpace = false
    let modifiedCls = cls
    return message.split("").map((char, index) => {
        modifiedCls = cls
        if (highlightInitials) {
            if (index === 0 || (char !== " " && emptySpace)) {
                emptySpace = false
                modifiedCls += " initial"
            } else if (char === " " && !emptySpace) {
                emptySpace = true
            }      
        }
        return (
            <span className={`header__letter ${modifiedCls}`} key={index}>{char === " " ? <>   </> : char}</span>
        )
    })
}

function GenerateGreeting({greeting, name}) {
    const greetingSpanList = getSpanList(greeting, "greeting__letter")

    const nameSpanList = getSpanList(name, "name__letter", true)

    return (
        <>
            {greetingSpanList.map((el, index) => (<span key={`${index}greeting`}>{el}</span>))}
            <br />
            {nameSpanList.map((el, index) => (<span key={`${index}name`}>{el}</span>))}
        </>
    )
}

const Greeting = () => {
    const headLines = ["Engineer", "Web Developer", "Python Developer"]

    const greeting = "Hi, I'm"
    const name = "Carlos Adrian Garcia"

  return (
    <div className="greeting__container">
        {/* <span className="header__letter greeting__letter">H</span>
        <span className="header__letter greeting__letter">i</span>
        <span className="header__letter greeting__letter">, </span>
        <>   </>
        <span className="header__letter greeting__letter">I</span>
        <span className="header__letter greeting__letter">'</span>
        <span className="header__letter greeting__letter">m</span>
        <br />
        <span className="header__letter name__letter initial">C</span>
        <span className="header__letter name__letter">a</span>
        <span className="header__letter name__letter">r</span>
        <span className="header__letter name__letter">l</span>
        <span className="header__letter name__letter">o</span>
        <span className="header__letter name__letter">s </span>
        <>   </>
        <span className="header__letter name__letter initial">A</span>
        <span className="header__letter name__letter">d</span>
        <span className="header__letter name__letter">r</span>
        <span className="header__letter name__letter">i</span>
        <span className="header__letter name__letter">a</span>
        <span className="header__letter name__letter">n </span>
        <>   </>
        <span className="header__letter name__letter initial">G</span>
        <span className="header__letter name__letter">a</span>
        <span className="header__letter name__letter">r</span>
        <span className="header__letter name__letter">c</span>
        <span className="header__letter name__letter">i</span>
        <span className="header__letter name__letter">a</span> */}
        <GenerateGreeting greeting={greeting} name={name} />
        <TransitionComponent textList={headLines} />
        <HeaderSocials />
        <CTA />
    </div>
  )
}

export default Greeting