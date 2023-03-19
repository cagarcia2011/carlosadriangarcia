import { createContext } from "react";
import { DataReturnType, data } from "../hooks/";

export const Context = createContext<DataReturnType | null>(null);

type ContextProviderProps = {
    children: JSX.Element|JSX.Element[]
}

export const ContextProvider = ({ children } : ContextProviderProps) => {
    const myData = data();

    return (
        <Context.Provider value={myData}>
            {children}
        </Context.Provider>
    )
}