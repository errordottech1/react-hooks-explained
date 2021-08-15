import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UseEffect = () => {
    
    //useState is function that stores and modify the state of a component
    const [data, setData] = useState("")

    //useEffect is a function which will be called whenever the page re-renders or renders
    //and whenever the state is changed
    useEffect(() => {
        console.log('i say hello to you as soon as the page is rendered')
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                console.log(response.data)
                setData(response.data[0].email)
                console.log('api request sent');
            })
        /*
        if we dont pass an empty array to useEffect as a second parameter,
        the useEffect will be called twice in this exapmle and thats not ok!
        if we need useEffect to trigger when a state changes,
        in other words when we need useEffect to listen to a specific state,
        we simply pass that state to this array as a parameter!
        by doing this, we are saying the useEffect that 
        "you need to listen to this state" which in our case is empty 
        */

    }, []);
    return (
        <div>
            <h2>useEffect & useState Hooks</h2>
            <h3>{data}</h3>
        </div>
    )
}

export default UseEffect