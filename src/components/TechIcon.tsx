import { IconType } from "react-icons"
import { useData } from "../hooks"
import { useEffect, useState } from "react"

export type TechIconProps = {
    IconElement: IconType,
    tooltip: string,
    animation?: string | null,
    color?: string | null
}

export function TechIcon({ IconElement, tooltip, animation, color } : TechIconProps) {
    const { local } = useData()
    const [iconColor, setIconColor] = useState(() => {
        return color==="#000" ? local==="dark" ? "#fff" : color : color
    })

    useEffect(() => {
        setIconColor(prev => {
            return prev==="#000" || prev==="#fff" ? local==="dark" ? "#fff" : "#000" : prev
        })
    }, [local])

    return (
        <div className="relative group cursor-help">
            <span className={`relative text-[1.5rem]`}>
                <IconElement color={iconColor} className={`${animation && animation} drop-shadow-sm dark:drop-shadow-white`}/>
            </span>
            <span className="absolute opacity-0 group-hover:opacity-60 bg-slate-500 text-white text-[0.75rem] left-1/2 -translate-x-1/2 group-hover:translate-y-1 p-1 w-[6rem] rounded-full transition-all duration-300 ease-in-out drop-shadow-black dark:drop-shadow-white">{tooltip}</span>
        </div>
    )
}