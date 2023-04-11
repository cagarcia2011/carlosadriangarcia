import { IconType } from "react-icons"
import { BsArrowRightShort, BsCodeSlash } from 'react-icons/bs'
import { TechIcon } from "../../components"
import { ProjectButton } from "./ProjectButton"

export type TechIconType = {
    id: number
    Icon: IconType,
    tooltip: string,
    animation?: string | null,
    color?: string | null
}

export interface ProjectCardProps {
    title: string,
    description: string,
    image: string,
    pageLink?: string,
    codeLink?: string,
    icons?: Array<TechIconType>
}

export function ProjectCard({ title, description, image, pageLink, codeLink, icons }: ProjectCardProps) {

    return (
        <div className="lg:h-[30rem] lg:mb-[2rem]">
            <div className='flex flex-col items-center h-full gap-2'>
                <a href={pageLink} target="_blank" className="cursor-pointer w-[100%] lg:w-[600px] h-auto lg:h-[300px] overflow-visible flex items-center  justify-center">
                    <img src={image} className="object-contain w-[100%] lg:w-auto h-auto lg:h-[300px] mb-2 rounded-2xl shadow-md shadow-shadow-dark dark:shadow-shadow-light overflow-hidden hover:scale-105 hover:shadow-lg transition-all duration-200 ease-in-out" />
                </a>
                <div className="flex flex-col justify-start items-start gap-2 w-full">
                    <h3 className="text-sm py-0 my-0 font-medium dark:text-accent-light">{title}</h3>
                    <p className="text-xtiny lg:text-tiny text-gray-lite dark:text-color-910">{description}</p>
                    <div className="flex justify-center space-x-4 text-center w-full">
                        {
                            icons.map(tech => (
                                <TechIcon key={`${tech.id}-${tech.tooltip}`} IconElement={tech.Icon} tooltip={tech.tooltip} animation={tech.animation} color={tech.color} />
                            ))
                        }
                    </div>
                    <div className="mt-5 w-full lg:w-auto flex flex-row justify-start items-start lg:flex-row gap-2 lg:gap-4">
                        <ProjectButton link={pageLink} Icon={BsArrowRightShort}>View Page</ProjectButton>
                        {
                            codeLink !== "" && <ProjectButton link={codeLink} Icon={BsCodeSlash} iconSize="1rem">View Source</ProjectButton>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}