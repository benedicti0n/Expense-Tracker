import ContextProvider from './Contexts/ContextProvider'
import Component from './Component'


function App() {
  

  return (
     <ContextProvider>
      <Component/>
    </ContextProvider>
  )
}

export default App