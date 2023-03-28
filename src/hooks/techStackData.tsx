import { FaCss3Alt, FaHtml5, FaPython, FaReact } from "react-icons/fa";
import { SiDotnet, SiRedux, SiTailwindcss, SiTypescript, SiMongodb, SiPostgresql, SiNodedotjs, SiJavascript } from "react-icons/si";

export type TechStackDataReturnType = ReturnType<typeof techStackData>

export function techStackData() {
    const techStack = {
        javascript: {
            id: 12,
            Icon: SiJavascript,
            tooltip: "JavaScript",
            animation: null,
            color: "#efd819"
        },
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
        dotnet: {
            id: 8,
            Icon: SiDotnet,
            tooltip: ".NET",
            animation: null,
            color: "#934b8e"
        },
        mongoDB: {
            id: 9,
            Icon: SiMongodb,
            tooltip: "MongoDB",
            animation: null,
            color: "#4ded64"
        },
        postgreSQL: {
            id: 10,
            Icon: SiPostgresql,
            tooltip: "PostgreSQL",
            animation: null,
            color: "#336791"
        },
        nodeJS: {
            id: 11,
            Icon: SiNodedotjs,
            tooltip: "Node.JS",
            animation: null,
            color: "#589450"
        },
    }   

    return {
        techStack
    }
}