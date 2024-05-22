import React from 'react'

const Props = (x) => {
    console.log(x.data);
  return (
    <div>
        {/* <h1>Hello {x.data}</h1> */}
        {/* <h1>Hello {x.data[2]}</h1> */}
        {/* <h1>Hello I'm {x.data.name} and my age is {x.data.age}</h1> */}
        <h1>Hello I'm first user and my name is {x.data[0].name}</h1>
    </div>
  )
}

export default Props