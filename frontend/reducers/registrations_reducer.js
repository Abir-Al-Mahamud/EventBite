import { 
    RECEIVE_REGISTRATIONS,
    RECEIVE_REGISTRATION,
    DELETE_REGISTRATION
} from '../actions/events';
import event_index from '../component/events/event_index';

const registrationsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    console.log(action)
    switch(action.type) {
        case RECEIVE_REGISTRATIONS:
            return action.registrations 
        case RECEIVE_REGISTRATION:
            // nextState[action.registration.event_id] = action.registration;
            // return nextState;
            return Object.assign({}, oldState, { [action.registration.event_id] : action.registration })
        case DELETE_REGISTRATION:
            delete nextState[action.unregistration.event_id]
            return nextState;
        default:
            return oldState;
    }
}

export default registrationsReducer;