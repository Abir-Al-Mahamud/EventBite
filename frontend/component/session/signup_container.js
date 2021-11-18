import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, clearSessionErrors } from '../../actions/session';
import Signup from './signup';

const mSTP = ({ errors }) => {
    
    return {
        errors: errors.session,
        formType: 'signup'

    }
}

const mDTP = dispatch => ({
    createNewUser: user => dispatch(signup(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
})

export default connect(mSTP, mDTP)(Signup);