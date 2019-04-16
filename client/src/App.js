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

const App = () => {
  return (
    <div>
      <Header />
      <Router>
        <div>
          <TopNav />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/signup' component={Signup} />
            <Route path='/signin' component={Signin} />
            <Route path='/reviews' component={Review} />
            <PrivateRoute path='/film' component={Films} />
            <Route path='/about' component={About} />
            <Route path='/account' component={Account} />
            
            {/* separate */}
            <Route path='/secret' component={Secret} />            
            <PrivateRoute2 path='/beauty' component={Beauty}/>
            
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App;
