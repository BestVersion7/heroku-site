import React, {useContext} from 'react'
import {NavLink} from 'react-router-dom'
import User from './User';
import {UserContext} from '../App'

const TopNav = () => {
  const {signedIn} = useContext(UserContext)

  return (
    <nav>            
      <NavLink
        className="nav-link"
        activeStyle={styles.activeLink}
        to='/' exact
      >Home</NavLink>

      <NavLink
        className="nav-link" 
        activeStyle={styles.activeLink}
        to='/reviews'
      >Reviews</NavLink>

      {signedIn ? <User /> : (
      <NavLink  
        className="nav-link" 
        activeStyle={styles.activeLink}
        to='/signin'
      >Sign In</NavLink>)}

    </nav>
  )
}

const styles = {
  activeLink: {
    background: 'black'
  }
}

export default TopNav