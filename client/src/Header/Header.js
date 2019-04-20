import React, {useState} from 'react';
import HeaderNav from './HeaderNav'
import wine from '../assets/wine.png'
import hamburgerIcon from '../assets/hamburgerIcon.png'
import exitIcon from '../assets/exitIcon.png'

const Header = () => {
    const [showNavLinks, setShowNavLinks] = useState(false)
    const [icon, setIcon] = useState(true)

    const handleShowNavLinks = () => {
      setShowNavLinks(!showNavLinks)
      setIcon(!icon)
    }

    const handleRefresh = () => {
        window.location.reload()
        window.scrollTo(0,0);
    }
  
    return (
        // <header className="header-container"> 
        <header className="header-container">
            <img className="header-icon" onClick={handleRefresh} src={wine} alt="wine" />
            {icon ?
                <img src={hamburgerIcon} 
                    className="nav-icon" 
                    alt="icon" 
                    onClick = {handleShowNavLinks}
                 /> :
                <img src={exitIcon} 
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