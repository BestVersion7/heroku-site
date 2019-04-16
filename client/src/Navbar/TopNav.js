import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import {auth} from '../utilities/auth'
import User from './User';
import axios from 'axios'

const TopNav = () => {
  const [signInBtn, setSignInBtn] = useState(true)
  const [loggedIn, setLoggedIn] = useState(true)

  const validateToken = async () => {
    try {
      await axios.get('/api/user/dummy', auth.getToken())
      setSignInBtn(true)
      setLoggedIn(true)
    } catch {
      setSignInBtn(true)
      setLoggedIn(true)
    }
  }

  useEffect(() => {validateToken()}, [])

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

      {signInBtn && <NavLink  
        className="nav-link" 
        activeStyle={styles.activeLink}
        to='/signin'
      >Sign In</NavLink>}
      {loggedIn && <User />}
    </nav>
  )
}

const styles = {
  activeLink: {
    background: 'black'
  }
}

export default TopNav