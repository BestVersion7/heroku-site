import React from 'react';
import Header from './Header';
import Home from './Routes/home';
import Forms from './Routes/forms';
import { NavLink, Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom'

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
            <NavLink
              className="nav-link" 
              activeStyle={styles.activeLink}
              to='/forms'
            >Forms</NavLink>
          </nav>

          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/forms' component={Forms} />
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
