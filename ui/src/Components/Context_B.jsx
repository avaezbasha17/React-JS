import React, { useContext } from 'react'
import { userData } from './UseContext'

const Context_B = () => {
    let use = useContext(userData)
    console.log(use);
  return (
    <div>
        <h1>{use.name}</h1>
        <h1>{use.age}</h1>
    </div>
  )
}

export default Context_B