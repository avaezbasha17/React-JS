import React, { useContext } from 'react'
import Callback_B from './Context_B';
import { userData } from './UseContext';

const Context_A = () => {
  let use = useContext(userData)
  return (
    <div>
      <h1>parent:{use.name}</h1>
        <Callback_B></Callback_B>
    </div>
  )
}

export default Context_A