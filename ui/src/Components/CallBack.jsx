import React, { useCallback, useState } from 'react'
import Count from './Count'
import Button from './Button'

const CallBack = () => {
    let [salary,setSalary] = useState(0)
    let [age,setAge] = useState(0)
  return (
    <div>
        <Count data={age}>Age:</Count>
        <Button fun={useCallback(()=>setAge(age+1),[age])}>Increment Age</Button>
        <Count data={salary}>Salary:</Count>
        <Button fun={useCallback(()=>setSalary(salary+5000),[salary])}>Increment Salary</Button>
    </div>
  )
}

export default CallBack