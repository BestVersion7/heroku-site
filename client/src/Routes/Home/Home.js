import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'
import Carousel from './carousel'

export default () => {
    const [redirect, setRedirect] = useState(false)
    const handleClick = () => {
        setRedirect(true)
    }
    if(redirect) return <Redirect to="signin"/>
    return (
        <div className="home-container">
            <div className="home-section1">
                <div className="page-container"> 
                    <i>Last update 28/04/19</i>
                    <h3>Welcome to GoldenWine</h3>
                    <Carousel />    
                    <p>Technologies Used: Front-End</p>
                    <ul>
                        <li>Reactjs</li>
                        <li>SASS</li>
                        <li>HTML</li>
                    </ul>
                    <div>Technologies Used: Back-end</div>
                    <ul>
                        <li>Expressjs</li>
                        <li>Nodejs</li>
                        <li>MongoDB Atlas</li>
                        <li>Cloudinary</li>
                    </ul>
                    <div>Others: </div>
                    <ul>
                        <li>Github</li>
                        <li>Heroku</li>
                        <li>Google Analytics</li>
                    </ul>
                </div>
            </div>

            <div className="page-container">
                <p>Wine and Dine. Dine and Wine. Strike First. Strike Hard. Show some Mercy. </p>
            </div>

            <div className="home-section2">
                <div className="page-container"> 
                    <p>Technologies currently learning: </p>
                    <ul>
                        <li>GraphQL</li>
                    </ul>
                    <p>Work Samples</p>
                    <ul>
                        <li>
                            <a 
                                href="https://goldenwine.herokuapp.com/" 
                                title="Full Stack App"
                                target="_blank"
                                rel="noopener noreferrer"
                            >Full Stack Website (this)</a>
                        </li>
                        <li>
                            <a 
                                href="https://bestversion7.github.io/portfolio/#/" 
                                title="Static App"
                                target="_blank"
                                rel="noopener noreferrer"
                            >Static SPA built with React, SASS, Nodejs, Github Pages</a>
                        </li>
                        <li>
                            <a 
                                href="https://snack.expo.io/@hunter99/3-12-18" 
                                title="Expo App"
                                target="_blank"
                                rel="noopener noreferrer"
                            >Mobile app built with React-Native</a>     
                        </li>
                    </ul>
                    Login to post comments and access a private route <br />
                    <button 
                        className="btn-regular"
                        onClick={handleClick}
                    >Login</button>
                </div>
            </div>
            <div className="home-section3">

            </div>
        </div>
    )
}