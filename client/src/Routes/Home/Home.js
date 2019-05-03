import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'
import Carousel from './carousel'
import {List, ListItem, ListItemText, ListItemAvatar} from '@material-ui/core'
import Check from '@material-ui/icons/Check'

export default () => {
    const [redirect, setRedirect] = useState(false)
    const handleClick = () => {
        setRedirect(true)
    }
    if(redirect) return <Redirect to="signin"/>
    return (
        <div className="page-container">
            <h3>Welcome to GoldenWine</h3>
            <i>Last update 28/04/19</i>
            <Carousel />    
            <div>Technologies Used: Front-End</div>
            <List>
                {['Reactjs', 'SASS', 'HTML', 'Material UI'].map((item, index) => (
                    <ListItem key={index}>
                        <ListItemAvatar><Check/></ListItemAvatar>
                        <ListItemText primary={item}/>
                    </ListItem>
                ))}
            </List>
            
            <div>Technologies Used: Back-end</div>
            <List>
                {['ExpressJs', 'Nodejs', 'MongoDB Atlas', 'Cloudinary'].map((item, index) => (
                    <ListItem key={index}>
                        <ListItemAvatar><Check/></ListItemAvatar>
                        <ListItemText primary={item}/>
                    </ListItem>
                ))}
            </List>
            <div>Others: </div>
            <List>
                {['Github', 'Heroku', 'Google Analytics'].map((item, index) => (
                    <ListItem key={index}>
                        <ListItemAvatar><Check/></ListItemAvatar>
                        <ListItemText primary={item}/>
                    </ListItem>
                ))}
            </List>

            {/* <div>
                <p>Wine and Dine. Dine and Wine. Strike First. Strike Hard. Show some Mercy. </p>
            </div> */}

            <p>Technologies currently learning: </p>
            <ul>
                <li>GraphQL</li>
            </ul>
            <p>Work Samples</p>
            <ul>
                <li>
                    <a 
                        href="https://goldenwine.herokuapp.com/" 
                        title="Full Stack App"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Full Stack Website (this)</a>
                </li>
                <li>
                    <a 
                        href="https://bestversion7.github.io/portfolio/#/" 
                        title="Static App"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Static SPA built with React, SASS, Nodejs, Github Pages</a>
                </li>
                <li>
                    <a 
                        href="https://snack.expo.io/@hunter99/3-12-18" 
                        title="Expo App"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Mobile app built with React-Native</a>     
                </li>
            </ul>
            Login to post comments and access a private route <br />
            <button 
                className="btn-regular"
                onClick={handleClick}
            >Login</button>
        </div>
    )
}