import React, {useState} from 'react'
import axios from 'axios'
import {CredentialFail} from './credentialVerify'

export default () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [credFail, setCredFail] = useState(false)

    const handleSignup = async e => {
        e.preventDefault()
            const api = '/user/signup';
            try {
                await axios.post(api, {username, password})     
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
                <label>Password</label>
                <input
                    value={password}
                    onChange = {handlePasswordChange}
                    type = "password"
                    minLength = '1'
                    maxLength = '15'
                /> <br />
                <button> Submit </button>           
            </form>
            <div style={{'height':'1em'}}>           
                {credFail && <CredentialFail />}
            </div>
        </div>
    )
}