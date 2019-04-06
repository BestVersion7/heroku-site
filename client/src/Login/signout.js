import React from 'react'

export default () => {
    return (
        <div>
            <button
                className="regular-button"
                onClick = {() => {
                    history.pushState('/home')
                }}
            >Sign out</button>
        </div>
    )
}