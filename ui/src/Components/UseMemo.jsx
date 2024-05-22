import React, { useEffect, useMemo, useState } from 'react'

const UseMemo = () => {
    let [count, setCount] = useState(0)
    let [count1, setCount1] = useState(0)
    let Even = useMemo(() => {
        let i = 0
        while (i < 10000) {
            i++
        }
        return count1 % 2 == 0
    }, [count1])
    return (
        <div>
            <h1>Count :{count}</h1>
            <button onClick={() => { setCount(count + 1) }}>Increment</button>
            <h1>{Even ? "Even" : "Odd"}</h1>
            <h1>Count1 :{count1}</h1>
            <button onClick={() => { setCount1(count1 + 1) }}>Increment</button>
        </div>
    )
}

export default UseMemo