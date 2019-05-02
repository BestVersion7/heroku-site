import React, {useState} from 'react';
import HeaderNav from './headerNav';
import {NavLink} from 'react-router-dom'
// import {TransitionGroup, CSSTransition} from 'react-transition-group'

const Header = () => {
    const [showNavLinks, setShowNavLinks] = useState(false)
    const [icon, setIcon] = useState(true)

    const handleShowNavLinks = () => {
      setShowNavLinks(!showNavLinks)
      setIcon(!icon)
    }

    const handleRefresh = () => {
        window.scrollTo(0,0);
    }
  
    return (
        // <header className="header-container"> 
        <header className="header-container">
            <NavLink to="/" exact>
                <img 
                    className="header-icon" 
                    onClick={handleRefresh} 
                    src="https://res.cloudinary.com/crimson-flamingo/image/upload/v1556245482/230419%20Icons/wine.png" 
                    alt="wine" 
                />
            </NavLink>   
             {/*working on transition  */}
            {icon ?
                <img 
                    src="https://res.cloudinary.com/crimson-flamingo/image/upload/v1556245482/230419%20Icons/hamburgerIcon.png"
                    className="nav-icon" 
                    alt="icon" 
                    onClick = {handleShowNavLinks}
                /> :
                <img
                    src="https://res.cloudinary.com/crimson-flamingo/image/upload/v1556245482/230419%20Icons/exitIcon.png"
                    className="nav-icon" 
                    alt="icon" 
                    onClick = {handleShowNavLinks}
                />
            }
            
            {showNavLinks ? <HeaderNav />: <div className="nav-desktop"><HeaderNav /></div>
} 
            {/* this is for not toggle the menu bar off from portrait to landscape */}
        </header>
    )
}

export default Header