import React, {useState} from 'react'
import {
    AppBar,
    Toolbar,
    Avatar, 
    MuiThemeProvider,
    createMuiTheme,
    Button,
    SwipeableDrawer
} from '@material-ui/core'
import {
    Reorder
} from '@material-ui/icons' 
import {
    NavLink
} from 'react-router-dom'

const theme = createMuiTheme({
    primary: {
        main: 'rgb(32,32,144)'
    }
})

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleRefresh = () => {
        window.scrollTo(0,0);
    }

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    
    return (
        <MuiThemeProvider theme={theme}>
            <AppBar position="static">
                <Toolbar>
                    <NavLink to="/" exact>
                        <Avatar 
                            onClick={handleRefresh} 
                            src="https://res.cloudinary.com/crimson-flamingo/image/upload/v1556245482/230419%20Icons/wine.png" 
                            alt="wine" 
                        />
                    </NavLink>

                    <Button onClick={handleOpen}>
                        <Reorder />
                    </Button>
                </Toolbar>
            </AppBar>

            <SwipeableDrawer
                open={isOpen}
                onClose={handleOpen}
                onOpen={handleOpen}
                anchor="right"
            >
                <NavLink to="/drinks">Drinks</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/signin">Sign In</NavLink>
            </SwipeableDrawer>
        </MuiThemeProvider>
    )
}

export default Header