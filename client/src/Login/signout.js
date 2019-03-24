import React from 'react'
import {withRouter} from 'react-router-dom'

export default () => {
    return (
        <div>
            <button
                onClick = {() => {
                    history.pushState('/home')
                }}
            >Sign out</button>
        </div>
    )
}