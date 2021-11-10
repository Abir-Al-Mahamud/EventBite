import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, clearSessionErrors } from '../../actions/session';
import Login from './login';

const mSTP = ({errors}) => {
    return {
        errors: errors.session,
        formType: 'login',
        navLink: <Link to="/login">Sign up instead</Link>
    }
}

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        clearSessionErrors: () => dispatch(clearSessionErrors())
    }
}

export default connect(mSTP, mDTP)(Login);