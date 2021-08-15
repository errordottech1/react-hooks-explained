import React, { forwardRef, useState, useImperativeHandle } from 'react'

const CustomButton = forwardRef((props, ref) => {
    /*
    imagine that we want to create the state of our custom button exactly in here
    we dont want to make the state in the parent coponent and pass it to the child component as props
    but meanwhile we want to change the state of the toggle to be the opposite of what it is right now 
    from the outside of this functional component, i mean from the parent class, that's when we
    we need to use useRef, forwardRef and useImprativeHandle hook

    forwardRef function allows us to transform our functional component and allow it to accept a
    ref from its parent
    */

    const [toggle, setToggle] = useState(false)

    /*
    but What is the usage of useImperativeHandle?
    it allows us to define functions based on a ref that can be called by using that ref
    */


    useImperativeHandle(ref, () => ({
        alterToggle() {
            setToggle(!toggle)
        },
    }))
    return (
        <>
            <button onClick={() => setToggle(!toggle)}>Button from the child</button>
            {toggle ? <span>toggle is on</span> : <span>toggle is off</span>}
        </>
    )
})

export default CustomButton