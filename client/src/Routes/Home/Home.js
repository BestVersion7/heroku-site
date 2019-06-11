import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import DrinkCarousel from '../../components/DrinkCarousel'
import SkillListItem from '../../components/SkillListItem'
import PortfolioListItem from '../../components/PortfolioLIstItem'

export default () => {
    const [redirect, setRedirect] = useState(false)
    const handleClick = () => {
        setRedirect(true)
    }
    if (redirect) return <Redirect to="signin" />
    return (
        <div className="page-container">
            <h3>Welcome to GoldenWine</h3>
            <i>Last update 06/05/19</i> <br />
            <p>
                Link to repo: <span> </span>
                <a href="https://github.com/BestVersion7/heroku-site">
                    https://github.com/BestVersion7/heroku-site
                </a>
            </p>
            <DrinkCarousel />
            <SkillListItem
                area="Front-end"
                skills={['Reactjs', 'HTML', 'CSS', 'SASS', 'Google Material Design', 'Web sockets', 'Jest/Enzyme', 'Cookies']}
            />
            <SkillListItem
                area="Back-end"
                skills={['Nodejs', 'Expressjs', 'MongoDB', 'SQL', 'Web sockets', 'RESTful API', 'Cloudinary', 'JWT', 'Passport', 'OAuth']}
            />
            <SkillListItem
                area="Analytics"
                skills={['Excel', 'SPSS', 'Google Analytics', 'SAS']}
            />
            <h3>Work Samples</h3>
            <section className="card-container">
                <PortfolioListItem
                    title="Website - Food/Recipe Blog"
                    link_url="https://bestversion7.github.io/portfolio/#/"
                    image_url="https://res.cloudinary.com/crimson-flamingo/image/upload/v1559314999/3105%20portfolio%20screenshots/3105_static_site_screenshot.png"
                />

                <PortfolioListItem
                    title="Mobile Application - Game gallery"
                    link_url="https://snack.expo.io/@hunter99/3-12-18"
                    image_url="https://res.cloudinary.com/crimson-flamingo/image/upload/v1559314998/3105%20portfolio%20screenshots/3105_mobile_screenshot.png"
                />

                <PortfolioListItem
                    title="Website - Realtime Chat App"
                    link_url="https://real-time-instant.herokuapp.com/"
                    image_url="https://res.cloudinary.com/crimson-flamingo/image/upload/v1559320982/3105%20portfolio%20screenshots/3105_chat_site_screenshot.png"
                />
            </section>
            Login to post comments and access a private route <br />
            <button
                className="btn-regular"
                onClick={handleClick}
            >Login</button>
        </div>
    )
}