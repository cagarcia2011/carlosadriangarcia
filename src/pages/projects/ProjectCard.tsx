import { IconType } from "react-icons"
import { TechIcon } from "../../components"

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
        <div className="lg:h-[25rem] lg:mb-[2rem]">
            <div className='flex flex-col items-center h-full gap-2'>
                <a href={pageLink} target="_blank" className="cursor-pointer w-fit mb-2 rounded-2xl shadow-md shadow-shadow-dark dark:shadow-shadow-light overflow-hidden hover:scale-105 hover:shadow-lg transition-all duration-200 ease-in-out">
                    <img src={image} className="object-fill" />
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
                </div>
            </div>
        </div>
    )
}