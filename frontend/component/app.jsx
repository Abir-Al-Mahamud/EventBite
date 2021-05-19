import React, { useEffect, useState } from 'react';
import { useCombobox } from 'downshift';
import {Input} from 'antd';
import Home from './home/home';
import { 
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter    
} from 'react-router-dom';
import { 
    AuthRoute,
    ProtectedRoute,
} from '../utils/route_utils';

import SignupContainer from './session/signup_container';
import LogInFormContainer from './session/login_form_container';
import Navbar from './navbar/navbar_container';
import CreateEventFormContainer from './events/create_event_form_container';


export default () => (
    

    <div>
        <Route path="/" component={Navbar}/>
        <Route exact path="/" component={Home}/>
        {/* <Route path="/events/new" component={CreateEventFormContainer}/> */}
        <AuthRoute path="/login" component={LogInFormContainer} />
        <AuthRoute path="/signup" component={SignupContainer}/>
    </div>
)