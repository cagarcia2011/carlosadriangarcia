import { TechIcon } from "./TechIcon"
import { useData } from "../hooks"

export function TechStack() {

    const { techStack } = useData()

    const techStackArray = Object.keys(techStack)
        .map(tech => {

            return techStack[tech]
        })
        .filter(techItem =>{
            return techItem.showOnBanner
        })

    return (
        <div className="flex w-full justify-center items-center">
            <div className="grid grid-cols-6 mx-4 w-full place-content-center">
                {
                    techStackArray.map(tech => (
                        <div key={tech.id} className="flex justify-center items-center pt-8">
                            <TechIcon IconElement={tech.Icon} tooltip={tech.tooltip} animation={tech.animation} color={tech.color} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}