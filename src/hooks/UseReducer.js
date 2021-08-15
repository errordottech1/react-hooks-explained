//this hook is useful when you want to 
//change the state of more than one component in a singel function

import React, { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1, showText: state.showText }
        case 'SHOWTEXT':
            return { count: state.count, showText: !state.showText }
        default:
            return state;
    }
}

const UseReducer = () => {
    //the state is going to hold all of our states
    //dispatch is a function that is called when any changes takes effect in the state variable
    //this pattern is very similar to redux patterns
    const [state, dispatch] = useReducer(reducer, { count: 0, showText: true })
    return (
        <div>
            <h2> useReducer Hook </h2>
            <h3>{state.count}</h3>
            <button onClick={() =>{
                dispatch({ type: "INCREMENT" })
                dispatch({ type: "SHOWTEXT" })
                }}>
                Click Me
            </button>
            {
                state.showText && (
                    <h1>This is a text</h1>
                )
            }
        </div>
    )
}

export default UseReducer