import React, { useRef } from 'react';
import CustomButton from './CustomButton'


const UseImperativeHandle = () => {
    /*
    now by using the useRef hook we need to refrence an actual component which is the customButton
    and call the setToggle function which is defined in that component from here, from the parent class
    Now in the normal situations like passing a ref to a normal html elements, we can actually pass ref
    but, in the normal situations we can't pass ref to another component like our customButton unless
    we use the forwarRef function which you can see the explanation in the customButton.js file  
    */
    const buttonRef = useRef(null)
    return (
        <div>
            <h1>useImperativeHandle Hook</h1>
            <button 
            onClick={() => {
                buttonRef.current.alterToggle()
            }}
            >
                Button from parent
            </button>
            <CustomButton ref={buttonRef} />
        </div>
    )
}


export default UseImperativeHandle