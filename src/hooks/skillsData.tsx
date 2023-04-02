
export type SkillsDataReturnType = ReturnType<typeof skillsData>

export const skillsData = () => {
    const advanceSkills = [
        "JavaScript",
        "TypeScript",
        "React",
        "Node.js",
        "HTML & CSS",
        "Python",
        "SQL",
        "UI Design",   
        "Project Management",
        "Agile Devlopment & SCRUM",
        "Debugging & Troubleshooting",
        "Data Science",
        "Object Oriented Programming",
        "Functional Programming",
        "Software Development Life Cycle",
        "Teamwork"
    ]
    
    const familiarSkills = [
        "Vue.js",
        "C# & .NET",
        "C++",
        "Express.js",
        "CI/CD",
    ]
    
    const tools = [
        "VS Code",
        "Git & GitHub",
        "MS Power Platform Apps",
        "Terminal (Bash, Powershell)",
        "Jira Software"
      ]


    return {
        advanceSkills,
        familiarSkills,
        tools
    }
}