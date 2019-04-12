import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'

export default () => {
    const [redirect, setRedirect] = useState(false)
    const handleClick = () => {
        setRedirect(true)
    }
    if(redirect) return <Redirect to="login"/>
    return (
        <div className="page-container">       
            <i>Last update 13/04/19</i> <br />
            <h3>Full-stack Progressive Web App</h3>
            <p>This app works offline. </p>
            <p>Technologies Used: Front-End</p>
            <ul>
                <li>ReactJS</li>
                <li>SASS</li>
                <li>HTML</li>
            </ul>
            <p>Technologies Used: Back-End</p>
            <ul>
                <li>ExpressJS</li>
                <li>NodeJS</li>
                <li>MongoDB Atlas</li>
                <li>Cloudinary</li>
                <li>Heroku</li>
                <li>Google Analytics</li>
            </ul>
            Login to post comments and access a private route <br />
            <button 
                className="btn-regular"
                onClick={handleClick}
            >Login</button>
            <div style={{'height': '10em'}}></div>
        </div>
    )
}