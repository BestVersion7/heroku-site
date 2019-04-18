import React, {useState, useEffect, useContext} from 'react'
import {NavLink} from 'react-router-dom'
import {auth} from '../utilities/auth'
import User from './User';
import axios from 'axios';
import {UserContext} from '../App'

const TopNav = () => {
  // const [signInBtn, setSignInBtn] = useState(true)
  const {signedIn} = useContext(UserContext)
  // console.log(signedIn)

  // const validateToken = async () => {
  //   try {
  //     await axios.get('/api/user/dummy', auth.getToken())

  //     setSignInBtn(false)
  //   } catch {

  //   }
  // }

  // useEffect(() => {validateToken()}, [])

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