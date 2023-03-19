import { useContext } from "react";

import { Context } from "../context/ContextProvider";

export const useData = () => {
    return useContext(Context)
}