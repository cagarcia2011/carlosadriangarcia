import React, { createContext } from 'react'
import AllData from '../Hooks/AllData'

export const MyContext = createContext()

const ContextProvider = ({ children }) => {
    const data = AllData()
  return (
    <MyContext.Provider value={data}>
        {children}
    </MyContext.Provider>
  )
}

export default ContextProvider