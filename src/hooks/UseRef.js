import React, { useRef } from 'react';

const UseRef = () => {
    /*
    useRef is the easiest way to access and manipulate the DOM elements
    for example one scenario is to focus on an input by clicking a button
    */
    const inputFocus = useRef(null)

    const buttonOnClick = () => {
        inputFocus.current.value
            ? inputFocus.current.value = ""
            : inputFocus.current.focus();
    }

    return (
        <div>
            <h1>useRef Hook</h1>
            <input placeholder="e-mail" type="email" ref={inputFocus} />
            <button onClick={buttonOnClick}>Focus</button>
        </div>
    )
}

export default UseRef