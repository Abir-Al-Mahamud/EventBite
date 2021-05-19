import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { createNewUser } from '../../actions/session';
import Signup from './signup';

const mSTP = ({ errors }) => ({
    errors: errors.session,
    formType: 'signup',
})

const mDTP = dispatch => ({
    createNewUser: formUser => dispatch(createNewUser(formUser))
})
export default connect(mSTP, mDTP)(Signup);