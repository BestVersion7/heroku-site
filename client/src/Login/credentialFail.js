import React from 'react'
import {CSSTransition} from 'react-transition-group'

const CredentialFail = () => {
    return (
        <CSSTransition
            classNames="message"
            timeout={300}
            in={true}
            appear={true}
        >
            <div>
                Please try again 
            </div>
        </CSSTransition>
        
    )
}

export default CredentialFail