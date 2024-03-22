import React, {useState} from 'react'
import UseContext from './UseContext'


function ContextProvider({children}) {
    const [count, setCount] = useState(0)

    function submit(){
      
    }
    
  return (
      <UseContext.Provider value={{count, setCount, submit}}>
        {children}
    </UseContext.Provider>
  )
}

export default ContextProvider