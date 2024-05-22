import React, { createContext } from 'react'
import Context_A from './Context_A';

export let userData = createContext();
const Context = () => {
  let obj = {
    name: "Avaez",
    age: 24
  }
  return (
    <div>
      <userData.Provider value={obj}>
        <Context_A />
      </userData.Provider>
    </div>
  )
}

export default Context