import React from 'react';
import SignupContainer from './session/signup_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';



export default () => (
    <div>
        <Route path="/" component={NavbarContainer}/>
        <Route exact path="/" component={Home}/>
        <AuthRoute path="/signup" component={SignupContainer} />
    </div>
);