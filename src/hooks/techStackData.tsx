import { FaCss3Alt, FaHtml5, FaPython, FaReact } from "react-icons/fa";
import { SiDotnet, SiRedux, SiTailwindcss, SiTypescript, SiMongodb, SiPostgresql, SiNodedotjs, SiJavascript, SiNextdotjs } from "react-icons/si";

export type TechStackDataReturnType = ReturnType<typeof techStackData>

export function techStackData() {
    const techStack = {
        javascript: {
            id: 12,
            Icon: SiJavascript,
            tooltip: "JavaScript",
            animation: null,
            color: "#efd819",
            showOnBanner: true
        },
        react: {
            id: 1,
            Icon: FaReact,
            tooltip: "React",
            animation: "animate-spin-slow",
            color: "#5ed3f2",
            showOnBanner: true
        },
        nextjs: {
            id: 13,
            Icon: SiNextdotjs,
            tooltip: "NEXT.js",
            animation: null,
            color: "#000",
            showOnBanner: false
        },
        redux: {
            id: 2,
            Icon: SiRedux,
            tooltip: "Redux",
            animation: "animate-spin-slow",
            color: "#7347b6",
            showOnBanner: true
        },
        typescript: {
            id: 3,
            Icon: SiTypescript,
            tooltip: "TypeScript",
            animation: null,
            color: "#3074bf",
            showOnBanner: true
        },
        html: {
            id: 4,
            Icon: FaHtml5,
            tooltip: "HTML",
            animation: null,
            color: "#dd4b25",
            showOnBanner: true
        },
        css: {
            id: 5,
            Icon: FaCss3Alt,
            tooltip: "CSS",
            animation: null,
            color: "#254bdd",
            showOnBanner: true
        },
        tailwind: {
            id: 6,
            Icon: SiTailwindcss,
            tooltip: "Tailwind CSS",
            animation: null,
            color: "#37bcf7",
            showOnBanner: true
        },
        python: {
            id: 7,
            Icon: FaPython,
            tooltip: "Python",
            animation: "animate-spin-slow",
            color: "#3573a5",
            showOnBanner: true
        },
        dotnet: {
            id: 8,
            Icon: SiDotnet,
            tooltip: ".NET",
            animation: null,
            color: "#934b8e",
            showOnBanner: true
        },
        mongoDB: {
            id: 9,
            Icon: SiMongodb,
            tooltip: "MongoDB",
            animation: null,
            color: "#3AB84D",
            showOnBanner: true
        },
        postgreSQL: {
            id: 10,
            Icon: SiPostgresql,
            tooltip: "PostgreSQL",
            animation: null,
            color: "#336791",
            showOnBanner: true
        },
        nodeJS: {
            id: 11,
            Icon: SiNodedotjs,
            tooltip: "Node.JS",
            animation: null,
            color: "#589450",
            showOnBanner: true
        },
    }   

    return {
        techStack
    }
}