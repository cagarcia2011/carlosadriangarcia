import { createContext } from "react";
import { DataReturnType, data, ProjectsDataReturnType, projectsData, techStackData, TechStackDataReturnType } from "../hooks/";

export interface DataContextType extends DataReturnType, ProjectsDataReturnType, TechStackDataReturnType {}

export const Context = createContext<DataContextType | null>(null);

type ContextProviderProps = {
    children: JSX.Element|JSX.Element[]
}

export const ContextProvider = ({ children } : ContextProviderProps) => {
    const myData = data();
    const myProjectsData = projectsData()
    const techStach = techStackData()

    return (
        <Context.Provider value={{
            ...myData,
            ...myProjectsData,
            ...techStach
        }}>
            {children}
        </Context.Provider>
    )
}