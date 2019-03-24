import React from 'react'
import {CSSTransition} from 'react-transition-group'

export const CredentialFail = () => {
    return (
        <CSSTransition
            classNames="message"
            timeout={500}
            in={true}
            appear={true}
        >
            <div>
                Please try again 
            </div>
        </CSSTransition>
        
    )
}