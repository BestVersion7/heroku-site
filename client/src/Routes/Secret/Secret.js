import React, {useState} from 'react'
import axios from 'axios';
import {auth} from '../../utilities/auth'
import {Redirect} from 'react-router-dom'

const Secret = () => {
    // const [loading, setLoading] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)
    
    const handleFormSubmit = async e => {
        e.preventDefault()
        try {     
            const token = await axios.post('/api/gallery/login', {username, password})
            auth.setToken(token)
            setRedirect(true)
        } catch(err) {
            alert(err)
        }
   }

    const handleUsernameChange = e => {
        setUsername(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
   
    if(redirect) return <Redirect to="/mktclass" />
    
    return (
        <div>
=            <p>Login:</p>
            <form onSubmit={handleFormSubmit}>
                <label for="user"> User </label>
                <input 
                    name="user"
                    type="text"
                    onChange = {handleUsernameChange}
                /> <br />
                <label for="password"> Password </label>
                <input 
                    name="password"
                    type="password"
                    onChange = {handlePasswordChange}
                />
                <br />
                <button>Login</button>
            </form>       
        </div>    
    )
}

export default Secret