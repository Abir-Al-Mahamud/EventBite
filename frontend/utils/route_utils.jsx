import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mSTP = state => ({
    loggedIn: Boolean(state.session.currentUser)
})

const Auth = ({ exact, loggedIn, path, component: Component }) => (
    <Route
        exact={exact} 
        path={path}
        render={props => (
            !loggedIn ? <Component {...props} /> : <Redirect to="/" />
        )} 
    />
);

const Protected = ({ exact, loggedIn, path, component: Component }) => (
    <Route
        exact={exact}
        path={path}
        render={props => (
            loggedIn ? <Component {...props} /> : <Redirect to="/login"/>
        )}
    />
)

export const AuthRoute = withRouter(connect(mSTP)(Auth));
export const ProtectedRoute = withRouter(connect(mSTP)(Protected));