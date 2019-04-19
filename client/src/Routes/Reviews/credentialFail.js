import React, {useState} from 'react'
import {CSSTransition} from 'react-transition-group'
import {Redirect} from 'react-router-dom'

export default () => {
    const [redirectPage, setRedirectPage] = useState(false)

    const handleRedirect = () => {
        setRedirectPage(true)
    }

    if(redirectPage) return <Redirect to="/signin" />

    return (
        <CSSTransition
            classNames="message"
            timeout={300}
            in={true}
            appear={true}
        >
            <div>
                Please signin to post
                <button className="btn-regular" onClick = {handleRedirect}>
                    Signin
                </button>
            </div>
        </CSSTransition>
    )
}