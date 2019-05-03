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
import {
    Reorder
} from '@material-ui/icons' 
import {
    NavLink
} from 'react-router-dom'

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
                        <span className="btn-header-dropdown-active">
                            <IconButton color="secondary" component={Reorder} onClick={handleOpen} />
                        </span>
                    </Toolbar>
                    <Divider />
                    
                    <List>
                        <ListItem button className="header-navlinks" component={NavLink} to="/" exact>
                            <ListItemText primary="Home"/>
                        </ListItem>
                        <ListItem button className="header-navlinks" component={NavLink} to="/drinks">
                            <ListItemText primary="Drinks"/>
                        </ListItem>
                        {/* <ListItem button className="header-navlinks" component={NavLink} to="/reviews">
                            <ListItemText primary="Reviews"/>
                        </ListItem> */}
                        <ListItem button className="header-navlinks" component={NavLink} to="/signin">
                            <ListItemText primary="Sign In"/>
                        </ListItem>
                    </List>
                </div>
            </SwipeableDrawer>  
        </MuiThemeProvider>
    )
}

export default Header