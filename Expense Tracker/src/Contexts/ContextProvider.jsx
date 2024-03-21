import React, {useState} from 'react'
import UseContext from './UseContext'


function ContextProvider({children}) {
    const [count, setCount] = useState(0)
  return (
      <UseContext.Provider value={{count, setCount}}>
        {children}
    </UseContext.Provider>
  )
}

export default ContextProvider