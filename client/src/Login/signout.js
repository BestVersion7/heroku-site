import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'

export default () => {
    const [redirectPage, setRedirectPage] = useState(false)

    const handleSignout = () => {
        localStorage.removeItem("jwt_token")
        setRedirectPage(true)
    }

    if(redirectPage) return <Redirect to="/" />

    return (
        <div>
            <button 
              className="btn-regular"
              onClick = {handleSignout}
            >Signout </button>
        </div>
    )
}