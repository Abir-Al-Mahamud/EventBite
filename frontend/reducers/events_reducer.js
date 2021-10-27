import {
    RECEIVE_EVENTS,
    RECEIVE_EVENT,
    REMOVE_EVENT,
    RECEIVE_USER_EVENTS
} from '../actions/events';


const eventsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    // let nextUser;
    // debugger
    switch (action.type) {
        case RECEIVE_EVENTS:
            // debugger
            return action.events;
        case RECEIVE_USER_EVENTS:
            // debugger
            // console.log("What!!!", action.events)
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