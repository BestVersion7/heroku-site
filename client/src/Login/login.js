import React, {useState} from 'react'
import {CredentialFail} from './credentialVerify'
import {auth} from '../auth'
import {Redirect} from 'react-router-dom'
import axios from 'axios';

export default () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [credFail, setCredFail] = useState(false)
    const [redirectPage, setRedirectPage] = useState(false)

    const handleLogin = e => {
        e.preventDefault()
        axios.post('/user/login', {username, password})
        .then(res => {
            auth.setToken(res)
            setRedirectPage(true)
        }) 
        .catch(() => {
            setRedirectPage(false)
            setCredFail(true)
        })
    }
    const handleUsernameChange = e => {
        e.preventDefault()
        setUsername(e.target.value)
        setCredFail(false)
    }
    const handlePasswordChange = e => {
        e.preventDefault()
        setPassword(e.target.value)
        setCredFail(false)
    }

    if(redirectPage) return <Redirect to = '/film' />
    return (
        <div>
            <h2>Login Page</h2>
                <form onSubmit={handleLogin}>
                    <label>Username</label>
                    <input onChange = {handleUsernameChange}/> <br />
                    <label>Password </label>
                    <input type="password" onChange = {handlePasswordChange}/> <br />
                    <button> Login </button>
                </form>
                LOGIN TO SEE A HIDDEN PAGE!
            <div style={{'height':'1em'}}>           
                {credFail && <CredentialFail />}
            </div>
        </div>
    )
}