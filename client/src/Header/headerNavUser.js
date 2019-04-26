import React, {useContext} from 'react'
import {auth} from '../utilities/auth'
import {NavLink} from 'react-router-dom'
import {UserContext} from '../App'

const HeaderNavUser = () => {
    const {userData} = useContext(UserContext)
    const {picture_url_thumbnail} = userData

    return (
        <ul className="navbar-user-container">
            <li className="navbar-user-li">
                <div className="navbar-user-text">
                    <img 
                        src={picture_url_thumbnail} 
                        alt="profile"
                        className="navbar-user-img"
                    />
                    Welcome {auth.getPayloadUsername()}!
                    <img src="https://res.cloudinary.com/crimson-flamingo/image/upload/v1556245482/230419%20Icons/expandIcon.png" className="expand-icon" alt="exp" />
                </div>

                <div className="navbar-user-dropdown-container">
                    <NavLink activeClassName="nav-link-active" className="nav-link" to="/account">Account</NavLink>
                    <button className="btn-signout" onClick={auth.signout}>Sign out</button>
                </div>
            </li>
        </ul>
    )
}

export default HeaderNavUser