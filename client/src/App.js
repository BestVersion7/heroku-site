import React from 'react';
import Header from './Header';
import Home from './Routes/home';
import Review from './Routes/review';
import Login from './Routes/login';
import {PrivateRoute} from './Routes/PrivateRoute'
import { NavLink, Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom'
import Film from './Routes/film';
import Signup from './Routes/signup'
import Secret from './Routes/secret'
import About from './Routes/about'
import Beauty from './Secret/Beauty'
import {PrivateRoute2} from './Routes/PrivateRoute2'

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
              to='/reviews'
            >Reviews</NavLink>
          </nav>

          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
            <Route path='/reviews' component={Review} />
            <PrivateRoute path='/film' component={Film} />
            <Route path='/about' component={About} />
            
            {/* separate */}
            <Route path='/secret' component={Secret} />            
            <PrivateRoute2 path='/beauty' component={Beauty}/>
            
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
