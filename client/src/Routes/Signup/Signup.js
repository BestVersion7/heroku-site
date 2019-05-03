import React, {useState} from 'react'
import axios from 'axios'
import {CredentialFail, CredentialSuccess} from '../../utilities/credentialModal'
import {NavLink} from 'react-router-dom'
import {Button, TextField} from '@material-ui/core'

const Signup = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('default1@m1.com')
    const [credFail, setCredFail] = useState(false)
    const [credSuccess, setCredSuccess] = useState(false)

    const handleSignup = async e => {
        e.preventDefault()
            const api = '/api/user/signup';
            try {
                await axios.post(api, {username, password, email}) 
                setEmail('')
                setUsername('')
                setPassword('')
                setCredSuccess(true)
            } catch(err) {
                setCredFail(true)
            }
    }

    const handleUsernameChange = e => {
        setUsername(e.target.value)
    }
    
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    return (
        <div className="page-container">
            <h2>Signup Page</h2>
            <form onSubmit = {handleSignup}>
                <TextField
                    onChange={handleUsernameChange}
                    required
                    label="Username"
                    variant="outlined"
                    value={username}
                />
                <br /> <br />
                <TextField
                    onChange={handleEmailChange}
                    required     
                    label="Email"
                    variant="outlined"
                    value={email}
                    type="Email"
                />
                <br /> <br />
                <TextField
                    onChange={handlePasswordChange}
                    required
                    label="Password"
                    variant="outlined"
                    type="password"
                    value={password}
                />
                <br />
                <Button type="submit" color="primary" variant="contained">
                    Sign up
                </Button>
            </form>
            <div style={{'height':'10em'}}>           
                {credFail && <CredentialFail />}
                {credSuccess && <CredentialSuccess />}
                <NavLink to="/signin" className="btn-redirect-link">
                    Already have an account? Click here to signin
                </NavLink>
            </div>
        </div>
    )
}

export default Signup