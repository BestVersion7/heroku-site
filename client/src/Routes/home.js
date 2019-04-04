import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'

export default () => {
    const [redirect, setRedirect] = useState(false)
    const handleClick = () => {
        setRedirect(true)
    }
    if(redirect) return <Redirect to="login"/>
    return (
        <div>       
            Login to see my work
            <button 
                onClick={handleClick}
            >Login</button>
            <div style={{'height': '10em'}}></div>
        </div>
    )
}