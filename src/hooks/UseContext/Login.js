import React, { useContext } from 'react'
import { AppContext } from './UseContext'

const Login = () => {
    const { setUsername } = useContext(AppContext)
    return (
        <>
            <input onClick={(e) => {
                setUsername(e.target.value)
            }} />
        </>
    )
}

export default Login