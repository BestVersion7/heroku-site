import React, {useContext} from 'react'
import {NavLink} from 'react-router-dom'
import HeaderNavUser from './headerNavUser'
import {UserContext} from '../App'
import {List, ListItem, ListItemText} from '@material-ui/core'

const HeaderNav = () => {
  const {signedIn} = useContext(UserContext)

  return (
    <nav className="nav-container">
        <div className="nav-link-padding"></div>
        {signedIn ? (
          <HeaderNavUser /> 
        ): (
        <ListItem button component={NavLink} to="/signin">
          <ListItemText primary="Sign in" />
        </ListItem>
        )}
    </nav>
  )
}

export default HeaderNav