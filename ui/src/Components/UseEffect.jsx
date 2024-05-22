import React, { useEffect, useState } from 'react'

const UseEffect = () => {
  let [count, setCount] = useState(0)
  let [btn, setBtn] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1)
    }, 1000)
  }, [btn])
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => { btn ? setBtn(false) : setBtn(true) }}>click me</button>
    </div>
  )
}

export default UseEffect