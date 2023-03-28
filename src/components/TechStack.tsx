import { TechIcon } from "./TechIcon"
import { useData } from "../hooks"

export function TechStack() {

    const { techStack  } = useData()

    const techStackArray = Object.keys(techStack).map(tech => {

        return techStack[tech]
    })

    return (
        <div className="flex justify-center space-x-4">
            {
                techStackArray.map(tech => (
                    <TechIcon key={tech.id} IconElement={tech.Icon} tooltip={tech.tooltip} animation={tech.animation} color={tech.color} />
                ))

            }
        </div>
    )
}