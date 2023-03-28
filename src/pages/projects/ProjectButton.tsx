import { ReactNode } from 'react'
import { IconType } from 'react-icons'

type ProjectButtonProps = {
    link: string,
    Icon: IconType,
    children: ReactNode,
    iconSize?: string,
}

export function ProjectButton({ children, link, Icon, iconSize }: ProjectButtonProps) {

    return (
        <a href={link} target='_target' className={`group flex flex-row h-[1.8rem] lg:h-[2rem] w-[7rem] gap-1 lg:w-[8rem] lg:gap-2 items-center justify-center mx-auto bg-gradient-to-r from-accent-color to-variant-bg duration-200 transition-all ease-in-out hover:bg-gradient-to-l px-2 text-xs text-white rounded-lg mt-2`}>
            {children}
            <span className='group-hover:translate-x-2 transition-all duration-200 ease-in-out'><Icon color='#FFF' fontSize={`${iconSize ? iconSize : "1.5rem"}`}/></span>
        </a>
    )
}