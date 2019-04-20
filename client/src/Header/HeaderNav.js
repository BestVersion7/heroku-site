import React, {useContext} from 'react'
import {NavLink} from 'react-router-dom'
import HeaderNavUser from './HeaderNavUser';
import {UserContext} from '../App'

const HeaderNav = () => {
  const {signedIn} = useContext(UserContext)

  return (
    <nav className="nav-container">
        <div className="nav-link-padding"></div>
        <NavLink
          className="nav-link"
          activeClassName="nav-link-active"
          to='/' exact
        >Home</NavLink>

        <NavLink
          className="nav-link" 
          activeClassName="nav-link-active"
          to='/reviews'
        >Reviews</NavLink>

        {signedIn ? (
          <HeaderNavUser /> 
          ): (
        <NavLink  
          className="nav-link" 
          activeClassName="nav-link-active"
          to='/signin'
        >Sign In</NavLink>)}
    </nav>
  )
}

export default HeaderNav