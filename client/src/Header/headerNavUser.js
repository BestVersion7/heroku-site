import React from 'react'
import {auth} from '../utilities/auth'
import {NavLink} from 'react-router-dom'
// import {UserContext} from '../App'
import {ListItem, ListItemText} from '@material-ui/core'

const HeaderNavUser = () => {
    // const {userData} = useContext(UserContext)
    // const {picture_url_thumbnail} = userData

    return (
        <div>
            <ListItem button component={NavLink} to="/account">
                <ListItemText primary="Account" />
            </ListItem>
            <ListItem button>
                <ListItemText primary="Sign out" onClick={auth.signout} />
            </ListItem>
        </div>
    )
}

export default HeaderNavUser