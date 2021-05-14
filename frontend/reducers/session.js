import {
    LOGIN_CURRENT_USER,
    LOGOUT_CURRENT_USER
} from '../actions/session'
import sessionReducer from './session'

const _nullSession = {
    currentUser = null
};

const loginReducer = (state = _nullSession, action) => {
    Object.freeze(state);

    switch (action.type) {
        case LOGIN_CURRENT_USER:
            return Object.assign({}, { currentUser: action.user})
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        default:
            return state;
    }
}

export default loginReducer;