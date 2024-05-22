import React, { useRef } from 'react'

const UseRef = () => {
    let name = useRef()
    let age = useRef()
    let body = useRef()
    let btn = useRef()

    name.current.style.height="20px"
    age.current.style.height="20px"
    btn.current.style.height="20px"

    let submit=()=>{
        console.log(name.current.value);
        console.log(age.current.value);
        body.current.style.background="black"
        body.current.style.color="white"
    }
  return (
    <div ref={body} style={{height:"100vh",display:"flex",justifyContent:"center",alignContent:"center"}}>
        <label htmlFor="">Name:</label>
        <input type="text" ref={name}/>
        <label htmlFor="">Age:</label>
        <input type="number" ref={age}/>
        <button ref={btn} onClick={submit}>Submit</button>
    </div>
  )
}

export default UseRef