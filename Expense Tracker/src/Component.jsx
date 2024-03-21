import React from 'react'
import UseContext from './Contexts/UseContext'
import { useContext } from 'react'

const Component = () => {
    const {count, setCount} = useContext(UseContext)

    return (
        <div className='h-full w-1/2'>
            <button className='h-10 w-10 border border-red-500' onClick={() => setCount(count + 1)}>{count}</button>
        </div>
  )
}

export default Component