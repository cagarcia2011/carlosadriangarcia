import { useCallback, useState } from 'react'
import { useData } from '../hooks'

export const Avatar = () => {
    const { avatars, handleImageChange, currentImgSelection } = useData();

    return (
        <img
          src={currentImgSelection}
          className="w-[260px] absolute left-[50%] transform -translate-x-[50%] h-auto drop-shadow-black mx-auto rounded-lg -mt-[140px] dark:drop-shadow-white"
          alt=""
          onClick={() => handleImageChange()}
        />
    )
}