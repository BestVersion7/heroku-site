import React from 'react';
import Secret from '../Login/secret';
import Login from '../Login/login';
import Signup from '../Login/signup';

export default () => {
    return (
        <div className="page-container">
            <h3 style={{ 'color': 'purple' }}>Ongoing Full Stack Site</h3>
            <Signup />
            <Login />
            <Secret />
        </div>
    )
}