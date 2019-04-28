import React from 'react'
import {Link} from 'react-router-dom'


const Footer = () => {
    return (
        <footer className="footer-container">
            Follow me! <br />
            <a href="https://github.com/BestVersion7" title="Github">
                <img height="40" src="https://res.cloudinary.com/crimson-flamingo/image/upload/v1556071829/230419%20Icons/github.png" alt="github" />
            </a>
            <a href="https://instagram.com" title="Instagram">
                <img height="40" src="https://res.cloudinary.com/crimson-flamingo/image/upload/v1556071041/230419%20Icons/instagram.png" alt="inst" />
            </a>
            <a href="https://facebook.com" title="Facebook">
                <img height="40" src="https://res.cloudinary.com/crimson-flamingo/image/upload/v1556415888/230419%20Icons/facebook.png" alt="fb" />
            </a>
            <br />
            <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> 
            2019 GoldenWine - 
            <Link className="footer-link" to="/legal"> Cookies, Privacy and Terms</Link>
        </footer>
    )
}

export default Footer