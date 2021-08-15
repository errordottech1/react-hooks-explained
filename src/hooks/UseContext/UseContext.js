import React, { createContext, useState } from 'react';

import Login from './Login'
import User from './User'

/*
inSuch case that we need our child components to have access to our state
we could use the useContext hook
the benefit of useContext is that we dont need to pass any props to our child components

first off we need to create an app context
the context is like a collection of states that can be accessed from the component tree
of the parent component that we are in right now, so let's make one 
*/

export const AppContext = createContext(null)

const UseContext = () => {
    const [username, setUsername] = useState("");
    return (
        <div>
            <h1>useContext Hook</h1>
            <AppContext.Provider value={{ username, setUsername }}>
                <Login /> <User />
            </AppContext.Provider>
        </div>
    )
}

export default UseContext