import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mSTP = (state) => ({
    signedIn: Boolean(state.session.user)
})

const Auth = ({ signedIn, path, component: Component, exact }) => (
    <Route 
        path={path}
        exact={exact}
        render={props => (
            signedIn ? <Redirect to="/" /> : <Component {...props}/>
        )}
    />
);

const Protected = ({ signedIn, path, component: Component, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props => (
            loggedIn ? <Component {...props} /> : <Redirect to="/signup"/>
        )}
    />
)

const Bool = ({ signedIn })

export const AuthRoute = withRouter(connect(mSTP)(Auth))
export const ProtectedRoute = withRouter(connect(mSTP)(Protected))