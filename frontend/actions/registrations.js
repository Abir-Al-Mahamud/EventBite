import * as RegistrationApiUtil from '../utils/registration_utils';
import { deleteRegistration } from './events';

export const RECEIVE_REGISTRATIONS = 'RECEIVE_REGISTRATIONS';
export const RECEIVE_REGISTRATION = 'RECEIVE_REGISTRATION';
export const DELETE_REGISTRATION = 'DELETE_REGISTRATION';
export const RECEIVE_REGISTRATION_ERRORS = 'RECEIVE_REGISTRATION_ERRORS';

const receiveReg = registration => ({
    type: RECEIVE_REGISTRATION,
    registration 
})

const deleteReg = unregistration => ({
    type: DELETE_REGISTRATION,
    unregistration
})

const receiveErrors = err => ({
    type: RECEIVE_REGISTRATION_ERRORS,
    err 
})

export const registerUser = (event_id) => dispatch => {
    return RegistrationApiUtil.registerUser(event_id)
        .then(reg => (dispatch(receiveReg(reg))),
        err => { dispatch(receiveErrors(err.responseJSON)) }
        )
}

export const unregisterUser = (id) => dispatch => {
    return RegistrationApiUtil.cancelRegisterUser(id)
        .then((reg) => dispatch(deleteReg(reg)))
}