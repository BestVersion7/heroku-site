import React from 'react'
import {NavLink} from 'react-router-dom'

const TopNav = () => {
    return (
        <nav>            
            <NavLink
              className="nav-link"
              activeStyle={styles.activeLink}
              to='/' exact
            >Home</NavLink>
            {/* <NavLink
              className="nav-link"
              activeStyle={styles.activeLink}
              to='/about' exact
            >About</NavLink> */}
            <NavLink
              className="nav-link" 
              activeStyle={styles.activeLink}
              to='/reviews'
            >Reviews</NavLink>

            {/* icons */}
            {/* <img src={auth.getPayloadProfilePic()} /> */}

        </nav>
    )
}

const styles = {
    activeLink: {
      background: 'black'
    }
  }

export default TopNav