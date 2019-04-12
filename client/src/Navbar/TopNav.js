import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import Signout from '../Login/signout'

export const SignoutBtnContext = React.createContext()

const TopNav = () => {
  const [showSignoutBtn, setShowSignoutBtn] = useState(false)
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
            <SignoutBtnContext.Provider value={setShowSignoutBtn}>
              {showSignoutBtn && <Signout />}
            </SignoutBtnContext.Provider>
        </nav>
    )
}

const styles = {
    activeLink: {
      background: 'black'
    }
  }

export default TopNav