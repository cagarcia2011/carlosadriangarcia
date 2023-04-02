import { createContext } from "react";
import {
    DataReturnType,
    data, 
    ProjectsDataReturnType, 
    projectsData, 
    techStackData, 
    TechStackDataReturnType,
    skillsData,
    SkillsDataReturnType
} from "../hooks/";

export interface DataContextType extends DataReturnType, ProjectsDataReturnType, TechStackDataReturnType, SkillsDataReturnType { }

export const Context = createContext<DataContextType | null>(null);

type ContextProviderProps = {
    children: JSX.Element | JSX.Element[]
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
    const myData = data();
    const myProjectsData = projectsData()
    const techStach = techStackData()
    const skills = skillsData()

    return (
        <Context.Provider value={{
            ...myData,
            ...myProjectsData,
            ...techStach,
            ...skills
        }}>
            {children}
        </Context.Provider>
    )
}