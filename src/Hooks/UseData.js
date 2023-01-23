import { useContext }  from 'react'

import { MyContext } from '../Context/ContextProvider'

const UseData = () => {
  return (
    useContext(MyContext)
  )
}

export default UseData