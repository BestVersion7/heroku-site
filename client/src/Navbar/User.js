import React from 'react'
import {auth} from '../utilities/auth'
import {NavLink} from 'react-router-dom'

const User = () => {
    return (
        <div className="navbar-user-container">
            <ul className="navbar-user-ul">
                <li className="navbar-user-li">
                    <img 
                        src={auth.getPayloadProfilePic()} 
                        alt="profile"
                        className="navbar-user-img"
                    />
                    <span className="navbar-user-text">Welcome {auth.getPayloadUsername()}!</span>
                    <NavLink className="navbar-user-link" to="/account">Account</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default User