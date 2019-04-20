import React, {useContext, useState} from 'react'
import {NavLink} from 'react-router-dom'
import User from './User';
import {UserContext} from '../App'
import hamburgerIcon from '../assets/hamburgerIcon.png'

const TopNav = () => {
  const {signedIn} = useContext(UserContext)
  const [showNavLinks, setShowNavLinks] = useState(true)

  const handleShowNavLinks = () => {
    setShowNavLinks(!showNavLinks)
  }

  return (
    <nav className="nav-container">
      <img src={hamburgerIcon} className="nav-links-icon" alt="icon" onClick = {handleShowNavLinks}/>          
      {showNavLinks && <div className="nav-links-container">
        <div className="nav-links-padding"></div>
        <NavLink
          className="nav-links"
          activeStyle={styles.activeLink}
          to='/' exact
        >Home</NavLink>

        <NavLink
          className="nav-links" 
          activeStyle={styles.activeLink}
          to='/reviews'
        >Reviews</NavLink>

        {signedIn ? <User /> : (
        <NavLink  
          className="nav-links" 
          activeStyle={styles.activeLink}
          to='/signin'
        >Sign In</NavLink>)}
      </div>}
    </nav>
  )
}

const styles = {
  activeLink: {
    background: 'darkred'
  }
}

export default TopNav