import React from 'react';
import Home from './home/home';
// import Events from './events/events';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_form_container'
import { Route } from 'react-router-dom';
import { 
    AuthRoute,
    ProtectedRoute,
} from '../utils/route_utils';
import Navbar from './navbar/navbar_container';

export default () => (
    <div>
        <Route path="/" component={Navbar}/>
        <Route exact path="/" component={Home}/>
        <AuthRoute exact path="/signup" component={SignupContainer}/>
        <ProtectedRoute exact path="/login" component={LoginContainer} />
    </div>
)