import { useCallback, useState } from 'react'
import { useData } from '../hooks'

type AvatarProps = {
  absolute?: boolean
  width?: string
}

export const Avatar = ({ absolute, width } : AvatarProps) => {
    const { handleImageChange, currentImgSelection } = useData();

    return (
        <img
          src={currentImgSelection}
          className={`w-[${width}] ${absolute ? "absolute" : "relative"} left-[50%] transform -translate-x-[50%] h-auto drop-shadow-black mx-auto rounded-lg -mt-[140px] dark:drop-shadow-white`}
          alt=""
          onClick={() => handleImageChange()}
        />
    )
}