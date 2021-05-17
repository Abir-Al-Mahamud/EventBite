import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session';
import Signup from './signup';

const mSTP = ({ errors }) => {
    return {
        
        formType: 'login',
        navLink: <Link to="/signup">Sign up instead</Link>
    }
}

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(login(user))
    }
}

export default connect(mSTP, mDTP)(Signup);