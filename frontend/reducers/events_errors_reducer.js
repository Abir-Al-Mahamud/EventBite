import {
    RECEIVE_EVENT_ERRORS,
    REMOVE_EVENT_ERRORS
} from '../actions/events';

const eventErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_EVENT_ERRORS:
            return action.errors;
        case REMOVE_EVENT_ERRORS:
            return [];
        default:
            return oldState;
    }
};

export default eventErrorsReducer;