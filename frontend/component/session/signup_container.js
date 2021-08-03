import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session';
import Signup from './signup';

const mSTP = ({ errors }) => {
    console.log(errors)
    return {
        errors: errors,
        formType: 'signup'
    }
}

const mDTP = dispatch => ({
    createNewUser: user => dispatch(signup(user))
})
export default connect(mSTP, mDTP)(Signup);