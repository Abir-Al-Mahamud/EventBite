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
import Footer from '../component/footer/footer';
import EventShowContainer from '../component/events/event_show_container';
import EventIndexContainer from '../component/events/event_index_container';
import EditEventFormContainer from '../component/events/edit_form_container';

export default () => (
    

    <div>
        <Route path="/" component={Navbar}/>
        <Route exact path="/" component={Home}/>
        <switch>
            <Route exact path="/events" component={EventIndexContainer}/>
            <ProtectedRoute exact path="/create" component={CreateEventFormContainer}/>
            <ProtectedRoute exact path="/events/:eventId/edit" component={EditEventFormContainer}/>
            <Route exact path="/events/:eventId" component={EventShowContainer}/>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignupContainer}/>
        </switch>
        <Route path="/" component={Footer}/>
    </div>
)