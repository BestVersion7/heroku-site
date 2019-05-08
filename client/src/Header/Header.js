import React, { useState, useContext } from 'react'
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
    Divider, 
    Button
} from '@material-ui/core'
import Menu from '@material-ui/icons/Menu'
import Close from '@material-ui/icons/Close'
import { NavLink } from 'react-router-dom'
import HeaderNav from './headerNav'
import { UserContext } from '../App'


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
    const { userData, signedIn } = useContext(UserContext)

    const [isOpenLeft, setIsOpenLeft] = useState(false)
    const [isOpenRight, setIsOpenRight] = useState(false)

    const handleRefresh = () => {
        window.scrollTo(0, 0);
    }

    const handleOpenLeft = () => {
        setIsOpenLeft(!isOpenLeft)
    }

    const handleOpenRight = () => {
        setIsOpenRight(!isOpenRight)
    }

    return (
        <MuiThemeProvider theme={theme}>
            <div className="header-container">
                <AppBar position="static">
                    <Toolbar>
                        <Avatar
                            component={NavLink}
                            to="/" exact
                            onClick={handleRefresh}
                            src="https://res.cloudinary.com/crimson-flamingo/image/upload/v1556245482/230419%20Icons/wine.png"
                            alt="wine"
                        />
                        <IconButton component={Menu} color="secondary" onClick={handleOpenLeft} />

                        <span className="btn-header-dropdown">
                            {signedIn ? (
                                <IconButton onClick={handleOpenRight}>
                                    <img
                                        height="30em"
                                        src={userData.picture_url_thumbnail}
                                        alt={userData.picture_url_thumbnail}
                                    />
                                </IconButton>
                            ) : (
                                    <Button 
                                        component={NavLink} 
                                        to="/signin" 
                                        style={{'backgroundColor': '#2196f3', 'color': 'white'}} 
                                        variant="contained"
                                    >Sign in</Button>
                                )
                            }
                        </span>
                    </Toolbar>
                </AppBar>
            </div>

            {/* swipeable drawer left */}
            <SwipeableDrawer
                open={isOpenLeft}
                onClose={handleOpenLeft}
                onOpen={handleOpenLeft}
                anchor="left"
            // variant="persistent"
            >
                <div className="header-navlinks-container">
                    <Toolbar>
                        <IconButton color="secondary" component={Close} onClick={handleOpenLeft} />
                    </Toolbar>
                    <Divider />

                    <List onClick={handleOpenLeft}>
                        <ListItem button component={NavLink} to="/" exact>
                            <ListItemText primary="Home" />
                        </ListItem>
                        <ListItem button component={NavLink} to="/drinks">
                            <ListItemText primary="Drinks" />
                        </ListItem>
                    </List>
                </div>
            </SwipeableDrawer>

            {/* right account drawer */}
            <SwipeableDrawer
                open={isOpenRight}
                onClose={handleOpenRight}
                onOpen={handleOpenRight}
                anchor="right"
            // variant="persistent"
            >
                <div className="header-navlinks-container">
                    <Toolbar>
                        <IconButton color="secondary" component={Close} onClick={handleOpenRight} />
                    </Toolbar>
                    <Divider />
                    <List onClick={handleOpenRight}>
                        <ListItem component={HeaderNav} />
                    </List>
                </div>
            </SwipeableDrawer>
        </MuiThemeProvider>
    )
}

export default Header