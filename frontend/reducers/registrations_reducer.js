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
            return action.registrations 
        case RECEIVE_REGISTRATION:
            eventRegistration = state[action.registration.event_id]
            eventRegistration.attendees.push(action.registration.buyer_id)
            return Object.assign(nextState, { [eventRegistration.id]: eventRegistration })
        case DELETE_REGISTRATION:
            eventRegistration = state[action.unregistration.event_id]
            removedRegistration = eventRegistration.attendees.filter((user) => user.id !== action.unregistration.buyer_id)
            eventRegistration.attendees = removedRegistration;
            return Object.assign(nextState, { [eventRegistration.id]: eventRegistration })
        default:
            return oldState;
    }
}

export default registrationsReducer;