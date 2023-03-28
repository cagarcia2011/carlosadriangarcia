import { AppleConceptDesign, BrokerAutoPage } from "../assets/projects"
import { techStackData } from "./techStackData"

export type ProjectsDataReturnType = ReturnType<typeof projectsData>

export function projectsData() {
    const { techStack } = techStackData()
    const {
        react,
        typescript,
        tailwind
    } = techStack

    const projectsArray = [
        {
            id: 1,
            title: "BrokerAuto Webpage",
            description: "BrokerAuto Company Webpage that features a virtual advisor that assists customers that are looking to buy a car. This project showcases my ability to deliver a functional Web App to a real company.",
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
            description: "Concept design for an Apple product landing page. This project showcases my UI design and Front-End skills to create a beautiful, responsive and interactive web app.",
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