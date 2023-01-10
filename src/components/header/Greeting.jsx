import React from 'react'

import TransitionComponent from '../transitions/TransitionComponent'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

function getSpanList(message, cls, highlightInitials=false, {onLetterHover, onLetterHoverOut}) {
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
            <span data={char} className={`header__letter ${modifiedCls}`} key={index} onMouseOver={onLetterHover} onMouseOut={onLetterHoverOut}>{char === " " ? <>   </> : char}</span>
        )
    })
}

function GenerateGreeting({greeting, name, onLetterHover, onLetterHoverOut}) {
    const greetingSpanList = getSpanList(greeting, "greeting__letter", false, {onLetterHover, onLetterHoverOut})

    const nameSpanList = getSpanList(name, "name__letter", true, {onLetterHover, onLetterHoverOut})

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

    const onLetterHover = (e) => {
        e.target.style.setProperty("--scale", 1.3)
    }

    const onLetterHoverOut = (e) => {
        e.target.style.setProperty("--scale", 1)
    }

  return (
    <div className="greeting__container">
        <GenerateGreeting greeting={greeting} name={name} onLetterHover={onLetterHover} onLetterHoverOut={onLetterHoverOut}/>
        <TransitionComponent textList={headLines} />
        <HeaderSocials />
        <CTA />
    </div>
  )
}

export default Greeting