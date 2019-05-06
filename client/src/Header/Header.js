import React, {useState} from 'react'
import {
    AppBar,
    Toolbar,
    Avatar, 
    MuiThemeProvider,
    createMuiTheme,
    SwipeableDrawer,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Divider
} from '@material-ui/core'
import Reorder from '@material-ui/icons/Reorder' 
import Close from '@material-ui/icons/Close'
import {NavLink} from 'react-router-dom'
import HeaderNav from './headerNav';


const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#8b0000'
        },
        secondary: {
            main: '#F0F8FF'
        }
    },
    typography: {
        useNextVariants: true
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
            <AppBar position="fixed">
                <Toolbar>
                    <Avatar 
                        component={NavLink}
                        to="/" exact
                        onClick={handleRefresh} 
                        src="https://res.cloudinary.com/crimson-flamingo/image/upload/v1556245482/230419%20Icons/wine.png" 
                        alt="wine" 
                    />

                    <span className="btn-header-dropdown">
                        <IconButton color="secondary" component={Reorder} onClick={handleOpen} />
                    </span>
                </Toolbar>
            </AppBar>

            {/* swipeable drawer */}
            <SwipeableDrawer
                open={isOpen}
                onClose={handleOpen}
                onOpen={handleOpen}
                anchor="right"
                // variant="persistent"
            >
                <div className="header-navlinks-container">
                {/* shows the icon */}
                    <Toolbar>
                        <IconButton color="secondary" component={Close} onClick={handleOpen} />
                    </Toolbar>
                    <Divider />
                    
                    <List onClick={handleOpen}>
                        <ListItem button component={NavLink} to="/" exact>
                            <ListItemText primary="Home"/>
                        </ListItem>
                        <ListItem button component={NavLink} to="/drinks">
                            <ListItemText primary="Drinks"/>
                        </ListItem>
                        <ListItem component={HeaderNav} />
                    </List>
                </div>
            </SwipeableDrawer>  
        </MuiThemeProvider>
    )
}

export default Header