import React, {useState} from 'react'
import axios from 'axios'
import CredentialFail from './credentialFail'
import {NavLink} from 'react-router-dom'

export default () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [credFail, setCredFail] = useState(false)

    const handleSignup = async e => {
        e.preventDefault()
            const api = '/api/user/signup';
            try {
                await axios.post(api, {username, password}) 
                alert('Success')
            } catch(err) {
                setCredFail(true)
            }
    }

    const handleUsernameChange = e => {
        setUsername(e.target.value)
        setCredFail(false)
    }
    
    const handlePasswordChange = e => {
        setPassword(e.target.value)
        setCredFail(false)
    }

    return (
        <div>
            <h2>Signup Page</h2>
            <form onSubmit = {handleSignup}>
                <label>Username</label>
                <input
                    value={username}
                    onChange = {handleUsernameChange}
                    minLength = '1'
                    maxLength = '15'
                /> <br />
                <label>Password </label>
                <input
                    value={password}
                    onChange = {handlePasswordChange}
                    type = "password"
                    minLength = '1'
                    maxLength = '15'
                /> <br />
                <button className="btn-regular"> Submit </button>           
            </form>
            <div style={{'height':'10em'}}>           
                {credFail && <CredentialFail />}
                <NavLink to="/signin" className="btn-redirect-link">
                    Already have an account? Click here to signin
                </NavLink>
            </div>
        </div>
    )
}