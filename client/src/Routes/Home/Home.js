import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'
import Carousel from './carousel'
import {List, ListItem, ListItemText, ListItemIcon, Link} from '@material-ui/core'
import Check from '@material-ui/icons/Check'
import ArrowForward from '@material-ui/icons/ArrowForward'

export default () => {
    const [redirect, setRedirect] = useState(false)
    const handleClick = () => {
        setRedirect(true)
    }
    if(redirect) return <Redirect to="signin"/>
    return (
        <div className="page-container">
            <h3>Welcome to GoldenWine</h3>
            <i>Last update 06/05/19</i> <br />
            <p>
                Link to repo: <span> </span>
                <a href="https://github.com/BestVersion7/heroku-site">
                    https://github.com/BestVersion7/heroku-site 
                </a>
            </p>
            <Carousel />    
            <h3>Technologies Used: Front-End</h3>
            <List>
                {['Reactjs', 'SASS', 'HTML', 'Material UI'].map((item, index) => (
                    <ListItem key={index}>
                        <ListItemIcon><Check/></ListItemIcon>
                        <ListItemText primary={item}/>
                    </ListItem>
                ))}
            </List>
            
            <h3>Technologies Used: Back-end (RESTful)</h3>
            <List>
                {['ExpressJs', 'Nodejs', 'MongoDB Atlas', 'Cloudinary'].map((item, index) => (
                    <ListItem key={index}>
                        <ListItemIcon><Check/></ListItemIcon>
                        <ListItemText primary={item}/>
                    </ListItem>
                ))}
            </List>
            <h3>Others: </h3>
            <List>
                {['Github', 'Heroku', 'Google Analytics'].map((item, index) => (
                    <ListItem key={index}>
                        <ListItemIcon><Check/></ListItemIcon>
                        <ListItemText primary={item}/>
                    </ListItem>
                ))}
            </List> 

            {/* <div>
                <p>Wine and Dine. Dine and Wine. Strike First. Strike Hard. Show some Mercy. </p>
            </div> */}

            <h3>Technologies currently learning: </h3>
            <ul>
                <li>GraphQL</li>
            </ul>
            <h3>Work Samples</h3>
            <List>
                {['https://goldenwine.herokuapp.com/', 
                'https://bestversion7.github.io/portfolio/#/', 
                'https://snack.expo.io/@hunter99/3-12-18'].map((item, index) => (
                    <ListItem key={index}>
                        <ListItemIcon><ArrowForward/></ListItemIcon>
                        <ListItemText>
                            <Link 
                                href={item}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={item}
                            >{item}</Link>
                        </ListItemText>
                    </ListItem>
                ))}
            </List> 
            Login to post comments and access a private route <br />
            <button 
                className="btn-regular"
                onClick={handleClick}
            >Login</button>
        </div>
    )
}