import React from 'react';
import Header from './Header/Header';
import Home from './Routes/Home/Home';
import Review from './Routes/Reviews/Review';
import Signin from './Routes/Signin/Signin';
import Signup from './Routes/Signup/Signup';

import {PrivateRoute} from './Routes/PrivateRoute'
import {Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Films from './Routes/Film/Films';
import Secret from './Routes/Secret/Secret'
import About from './Routes/about'
import Beauty from './Routes/Secret/Beauty'
import TopNav from './Navbar/TopNav'
import {PrivateRoute2} from './Routes/PrivateRoute2'
import NoMatch from './Routes/noMatch'
import Account from './Routes/Account/Account'

import {auth} from './utilities/auth'
import {useEffect, useState} from 'react'
import axios from 'axios'

export const UserContext = new React.createContext()

const App = () => {
  const [userData, setUserData] = useState('')
  const [signedIn, setSignedIn] = useState(false)

  const validateToken = async () => {
    try {
      // check to see if token works
      await axios.get(`/api/user/dummy`, auth.getToken())
      // retrieve data from username
      const {data} = await axios.get(`/api/user/${auth.getPayloadUsername()}`, auth.getToken())
      setSignedIn(true)
      setUserData(data)
    } catch {

    }
  }

  useEffect(() => {validateToken()}, [])

  return (
    <div>
      <Header />
      <Router>
        <div>
          <UserContext.Provider value={{userData, signedIn}}>
            <TopNav />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/signup' component={Signup} />
              <Route path='/signin' component={Signin} />
              <Route path='/reviews' component={Review} />
              <PrivateRoute path='/film' component={Films} />
              <Route path='/about' component={About} />
              <PrivateRoute path='/account' component={Account} />
              
              {/* separate */}
              <Route path='/secret' component={Secret} />            
              <Route path='/mktclass' component={Beauty}/>
              
              <Route component={NoMatch} />
            </Switch>
          </UserContext.Provider>
        </div>
      </Router>
    </div>
  )
}

export default App;
