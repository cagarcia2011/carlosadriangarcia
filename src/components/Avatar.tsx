import { useCallback, useState } from 'react'
import { useData } from '../hooks'

type AvatarProps = {
  absolute?: boolean
  width?: string
}

export const Avatar = ({ absolute, width } : AvatarProps) => {
    const { currentImgSelection } = useData();

    return (
        <img
          src={currentImgSelection}
          className={`w-[200px] lg:w-[260px] ${absolute ? "absolute" : "relative"} transition-all duration-200 ease-in-out left-[50%] transform -translate-x-[50%] h-auto drop-shadow-black mx-auto rounded-lg -mt-[140px] dark:drop-shadow-white`}
          alt=""
        />
    )
}