import React, {useState, useEffect} from 'react'
import {auth} from '../utilities/auth'
import {Route, Redirect} from 'react-router-dom'
import axios from 'axios'

export function PrivateRoute({ component: Component, ...rest }) {
  const [token, setToken] = useState(true)
  
  //this allows browser refresh
  //run through server verification and if validates, then proceeds
  const validateToken = async () => {
    try {
      await axios.get('/api/user/dummy', auth.getToken())
    } catch {
      setToken(false)
    }
  }
  useEffect(() => {
    validateToken()
  }, [])
  return (
      <Route
        {...rest}
        render={props =>
          token ? (
            <Component {...props} />
          ) : (
              <Redirect to='signin'/>
            )
        }
      />
    );
  }