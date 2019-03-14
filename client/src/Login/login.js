import React, {useState} from 'react'
import axios from 'axios'
import {CredentialSuccess, CredentialFail} from './credentialVerify'

export default () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [credFail, setCredFail] = useState(false)
    const [credSuccess, setCredSuccess] = useState(false)

    const handleLogin = async e => {
        e.preventDefault()
        try {
            const post = await axios.post('/user/login', 
            {
                username,
                password
            }) 
            axios.defaults.headers.Authorization = await `Bearer ${post.data.token}`
            const token = await axios.defaults.headers.Authorization
            localStorage.setItem('jwt_token', token)
            setCredSuccess(true)
        } catch(err) {
            setCredFail(true)
        }
    }

    const handleUsernameChange = e => {
        e.preventDefault()
        setUsername(e.target.value)
        setCredFail(false)
        setCredSuccess(false)
    }
    const handlePasswordChange = e => {
        e.preventDefault()
        setPassword(e.target.value)
        setCredFail(false)
        setCredSuccess(false)
    }

    const handleLogout = () => {
        localStorage.removeItem('jwt_token')
        setCredFail(false)
        setCredSuccess(false)
    }

    return (
        <div>
            <h2>Login Page</h2>
            <form onSubmit={handleLogin}>
                <label>Username</label>
                <input value={username} onChange = {handleUsernameChange}/> <br />
                <label>Password</label>
                <input type="password" value={password} onChange = {handlePasswordChange}/> <br />
                <button> Login </button>
            </form>
            <button onClick = {handleLogout}>Logout</button>
            <div style={{'height':'1em'}}>           
                {credFail && <CredentialFail />}
                {credSuccess && <CredentialSuccess />}
            </div>
            </div>
    )
}