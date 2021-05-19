import {
    RECEIVE_EVENTS,
    RECEIVE_EVENT,
    REMOVE_EVENT
} from '../actions/events';


const EventsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_EVENTS:
            return action.events;
        case RECEIVE_EVENT:
            nextState[action.event.id] = action.event;
            return nextState;
        case REMOVE_EVENT:
            delete nextState[action.eventId];
            return nextState;
        default:
            return oldState;
    }
}

export default EventsReducer;