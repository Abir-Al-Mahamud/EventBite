import { 
    RECEIVE_REGISTRATIONS,
    RECEIVE_REGISTRATION,
    DELETE_REGISTRATION
} from '../actions/registrations';
import event_index from '../component/events/event_index';

const registrationsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    let eventRegistration;
    let removedRegistration;

    switch(action.type) {
        case RECEIVE_REGISTRATIONS:
            // console.log(action)
            return action.registrations 
        case RECEIVE_REGISTRATION:
            nextState[action.registration.id] = action.registration;
            return nextState;
        case DELETE_REGISTRATION:
            delete nextState[action.registration_id]
            return nextState;
        default:
            return oldState;
    }
}

export default registrationsReducer;