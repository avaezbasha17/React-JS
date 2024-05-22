import React, { useReducer } from 'react'

const UseReducer = () => {
    let initial = 0
    let reducer = (state, action) => {
        switch (action) {
            case "add":
                return state + 1;
            case "subtract":
                return state - 1;
            case "reset":
                return 0;
            default:
                throw new Error("Unexpected action");
        }
    }
    let [count, dispatch] = useReducer(reducer, initial)
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => dispatch("add")}>
                add
            </button>
            <button onClick={() => dispatch("subtract")}>
                subtract
            </button>
            <button onClick={() => dispatch("reset")}>
                reset
            </button>
        </div>
    )
}
export default UseReducer