import React, { useState }  from 'react'

const Form = () => {
    let [input,setInput] = useState({})

    let handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setInput(values=>({...values,[name]:value}))
    }

    let handlepass = (event) =>{
        console.log(input);
    }
  return (
    <div>
        <label htmlFor="">Enter your name:</label>
        <input type="text" name='name' onChange={handleChange} value={input.name || ""} />

        <label htmlFor="">Enter the ages:</label>
        <input type="number" name='age' onChange={handleChange} value={input.age || ""} />

        <button onClick={handlepass}>Submit</button>
    </div>
  )
}

export default Form