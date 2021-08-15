import React, { useEffect, useRef, useLayoutEffect } from 'react';

const UseLayoutEffect = () => {
    /*
    useLayoutEffect is so so similar to useEffet but the main difference is that it
    the firstone calls its callback function before our components are rendered
    on the screen and printed for users 
    but the second one calls its callback function after the components are rendered
    and printed on the screen for users
    
    this is mostly used in scenrios where you want to change something before 
    user sees something on the screen, in ther words you want to change some
    components before that they get rendered on the screen
    */
    const inputRef = useRef(null)

    useLayoutEffect(() => {
        console.log(inputRef.current.value)
    },[])

    useEffect(() => {
        inputRef.current.value = 'inputRef has changed'
    },[])
    return (
        <div>
            <h1>useLayoutEffect Hook</h1>
            <input ref={inputRef} value="errordottech" ></input>
        </div>
    )
}

export default UseLayoutEffect