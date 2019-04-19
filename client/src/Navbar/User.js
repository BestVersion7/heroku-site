import React, {useContext} from 'react'
import {auth} from '../utilities/auth'
import {NavLink} from 'react-router-dom'
import {UserContext} from '../App'

const User = () => {
    const {userData} = useContext(UserContext)
    const {picture_url_thumbnail} = userData

    return (
        <div className="navbar-user-container">
            <ul className="navbar-user-ul">
                <li className="navbar-user-li">
                    <img 
                        src={picture_url_thumbnail} 
                        alt="profile"
                        className="navbar-user-img"
                    />
                    <span className="navbar-user-text">Welcome {auth.getPayloadUsername()}!</span>
                    <div className="navbar-user-dropdown-container">
                        <NavLink className="navbar-user-dropdown-items" to="/account">Account</NavLink>
                        <NavLink className="navbar-user-dropdown-items" to="/" exact onClick={auth.signout}>Sign out</NavLink>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default User