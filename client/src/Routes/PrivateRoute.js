import React, {useState, useEffect} from 'react'
import {Route, Redirect} from 'react-router-dom'
import {auth} from '../utilities/auth'
import axios from 'axios'

export function PrivateRoute({ component: Component, ...rest }) {
  const [signedIn, setSignedIn] = useState(true)

  const validateToken = async () => {
    try {
      await axios.get(`/api/user/${auth.getPayloadUsername()}`, auth.getToken())
    } catch {
      setSignedIn(false)
    }
  }

  useEffect(() => {validateToken()}, [])

  return (
      <Route
        {...rest}
        render={props =>
          signedIn ? (
            <Component {...props} />
          ) : (
              <Redirect to='signin'/>
            )
        }
      />
    );
  }