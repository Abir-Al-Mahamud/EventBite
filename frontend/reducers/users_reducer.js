import { RECEIVE_CURRENT_USER } from '../actions/session';

import { RECEIVE_EVENTS } from '../actions/events';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_EVENTS:
            return Object.assign({}, state, action.events)
        default:
            return state;
    }
}

export default usersReducer;