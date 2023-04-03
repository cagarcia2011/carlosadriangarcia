import { AppleConceptDesign, BrokerAutoPage, CgNetflixClone } from "../assets/projects"
import { techStackData } from "./techStackData"

export type ProjectsDataReturnType = ReturnType<typeof projectsData>

export function projectsData() {
    const { techStack } = techStackData()
    const {
        react,
        typescript,
        tailwind,
        mongoDB,
        nextjs
    } = techStack

    const projectsArray = [
        {
            id: 3,
            title: "Netflix Clone",
            description: "Fullstack Netflix Clone built with Next.js, NextAuth.js, and MongoDB. This project was deployed with Vercel.",
            pageLink: "https://cg-netflix-clone.vercel.app/",
            codeLink: "https://github.com/cagarcia2011/cg-netflix-clone",
            image: CgNetflixClone,
            icons: [
                nextjs,
                typescript,
                mongoDB
            ]
        },
        {
            id: 1,
            title: "BrokerAuto Webpage",
            description: "BrokerAuto Company Webpage that features a virtual advisor that assists customers that are looking to buy a car. This a project is in Beta. This project was deployed with Netlify.",
            pageLink: "https://test-brokerauto.netlify.app/",
            codeLink: "",
            image: BrokerAutoPage,
            icons: [
                react,
                typescript,
                tailwind
            ]
        },
        {
            id: 2,
            title: "Apple Store Concept UI Design",
            description: "Concept design for an Apple product landing page. This project showcases my UI design and Front-End skills to create a beautiful, responsive and interactive Webpage. This project was deployed with Netlify.",
            pageLink: "https://apple-concept.netlify.app/",
            codeLink: "https://github.com/cagarcia2011/apple-landing-page-concept#apple-concept-landing-page",
            image: AppleConceptDesign,
            icons: [
                react,
                typescript,
                tailwind
            ]
        },
    ]

    return {
        projectsArray
    }
}