import React from 'react'

import TextAnimation from "react-text-animations";

import './transitions.css'

const TransitionComponent = ({ textList }) => {
    const target = textList[0]
    const text = textList

    return (
        <TextAnimation.Clip
            target={target}
            text={text}
            cname="textAnimation"
            id="textAnimation__slide"
            animation={{
                duration:1000,
                delay:2000,
                timingFunction:'ease-out',
            }}
            loop={true}>
            {target}
        </TextAnimation.Clip>
    )
}

export default TransitionComponent