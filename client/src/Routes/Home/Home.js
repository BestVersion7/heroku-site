import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'
import DrinkCarousel from './drinkCarousel'

export default () => {
    const [redirect, setRedirect] = useState(false)
    const handleClick = () => {
        setRedirect(true)
    }
    if(redirect) return <Redirect to="signin"/>
    return (
        <div className="page-container">   
            <DrinkCarousel />    
            <i>Last update 20/04/19</i> <br />
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