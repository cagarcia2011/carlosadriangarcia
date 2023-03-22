import { useState } from "react"
import { FaReact, FaHtml5, FaCss3Alt, FaPython } from "react-icons/fa"
import { SiTypescript, SiTailwindcss, SiRedux, SiDotnet } from 'react-icons/si'
import { TechIcon } from "./TechIcon"
import { IconType } from "react-icons"

type TechStackElement = {
    id: number,
    icon: IconType,
    tooltip: string,
    animation: string | null,
    color: string | null
}

export function TechStack() {

    const [techStackArray, setTechStackArray] = useState<Array<TechStackElement>>(() => {
        return [
            {
                id: 1,
                icon: FaReact,
                tooltip: "React",
                animation: "animate-spin-slow",
                color: "#5ed3f2"
            },
            {
                id: 2,
                icon: SiRedux,
                tooltip: "Redux",
                animation: "animate-spin-slow",
                color: "#7347b6"
            },
            {
                id: 3,
                icon: SiTypescript,
                tooltip: "TypeScript",
                animation: null,
                color: "#3074bf"
            },
            {
                id: 4,
                icon: FaHtml5,
                tooltip: "HTML",
                animation: null,
                color: "#dd4b25"
            },
            {
                id: 5,
                icon: FaCss3Alt,
                tooltip: "CSS",
                animation: null,
                color: "#254bdd"
            },
            {
                id: 6,
                icon: SiTailwindcss,
                tooltip: "Tailwind CSS",
                animation: null,
                color: "#37bcf7"
            },
            {
                id: 7,
                icon: FaPython,
                tooltip: "Python",
                animation: "animate-spin-slow",
                color: "#3573a5"
            },
            // {
            //     id: 8,
            //     icon: SiDotnet,
            //     tooltip: ".NET",
            //     animation: null,
            //     color: "#934b8e"
            // },
        ]
    })

    return (
        <div className="flex justify-center space-x-4">
            {
                techStackArray.map(tech => (
                    <TechIcon key={tech.id} IconElement={tech.icon} tooltip={tech.tooltip} animation={tech.animation} color={tech.color} />
                ))

            }
        </div>
    )
}