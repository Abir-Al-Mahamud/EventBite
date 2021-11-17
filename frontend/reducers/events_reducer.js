import {
    RECEIVE_EVENTS,
    RECEIVE_EVENT,
    REMOVE_EVENT,
    RECEIVE_USER_EVENTS
} from '../actions/events';


const eventsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_EVENTS:
            return action.events;
        case RECEIVE_USER_EVENTS:
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

export default eventsReducer;