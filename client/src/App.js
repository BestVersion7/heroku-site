import React from 'react';
import Header from './Header';
import Home from './Routes/home';
import Forms from './Routes/forms';
import Login from './Routes/login';
import {PrivateRoute} from './Routes/PrivateRoute'
import { NavLink, Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom'
import Film from './Routes/film';
import Signup from './Routes/signup'
import Secret from './Routes/secret'
import About from './Routes/about'

const App = () => {
  return (
    <div>
      <Header />
      <Router>
        <div>
          <nav>            
            <NavLink
              className="nav-link"
              activeStyle={styles.activeLink}
              to='/' exact
            >Home</NavLink>
            {/* <NavLink
              className="nav-link"
              activeStyle={styles.activeLink}
              to='/about' exact
            >About</NavLink> */}
            <NavLink
              className="nav-link" 
              activeStyle={styles.activeLink}
              to='/forms'
            >Reviews</NavLink>
            {/* <NavLink
              className="nav-link" 
              activeStyle={styles.activeLink}
              to='/film'
            >Film</NavLink> */}
          </nav>

          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
            <Route path='/forms' component={Forms} />
            <PrivateRoute path='/film' component={Film} />
            <Route path='/about' component={About} />
            <Route path='/secret' component={Secret} />            
            <Redirect to='/' />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

const styles = {
  activeLink: {
    background: 'black'
  }
}
export default App;
