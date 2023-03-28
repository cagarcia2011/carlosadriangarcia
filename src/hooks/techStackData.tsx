import { FaCss3Alt, FaHtml5, FaPython, FaReact } from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiTypescript } from "react-icons/si";

export type TechStackDataReturnType = ReturnType<typeof techStackData>

export function techStackData() {
    const techStack = {
        react: {
            id: 1,
            Icon: FaReact,
            tooltip: "React",
            animation: "animate-spin-slow",
            color: "#5ed3f2"
        },
        redux: {
            id: 2,
            Icon: SiRedux,
            tooltip: "Redux",
            animation: "animate-spin-slow",
            color: "#7347b6"
        },
        typescript: {
            id: 3,
            Icon: SiTypescript,
            tooltip: "TypeScript",
            animation: null,
            color: "#3074bf"
        },
        html: {
            id: 4,
            Icon: FaHtml5,
            tooltip: "HTML",
            animation: null,
            color: "#dd4b25"
        },
        css: {
            id: 5,
            Icon: FaCss3Alt,
            tooltip: "CSS",
            animation: null,
            color: "#254bdd"
        },
        tailwind: {
            id: 6,
            Icon: SiTailwindcss,
            tooltip: "Tailwind CSS",
            animation: null,
            color: "#37bcf7"
        },
        python: {
            id: 7,
            Icon: FaPython,
            tooltip: "Python",
            animation: "animate-spin-slow",
            color: "#3573a5"
        },
        //dotnet: {
        //     id: 8,
        //     Icon: SiDotnet,
        //     tooltip: ".NET",
        //     animation: null,
        //     color: "#934b8e"
        // },
    }   

    return {
        techStack
    }
}