import event_index from '../component/events/event_index';
import * as EventAPIUtil from '../utils/event_utils';

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const RECEIVE_USER_EVENTS = "RECEIVE_USER_EVENTS";
export const RECEIVE_NEW_EVENT = "RECEIVE_NEW_EVENT";
export const REMOVE_EVENT = "REMOVE_EVENT";
export const EDIT_EVENT = "EDIT_EVENT";


const receiveEvents = events => ({
    type: RECEIVE_EVENTS,
    events: events 
})

const receiveEvent = event => ({
    type: RECEIVE_EVENT,
    event: event 
})

const receiveUserEvents = events => ({
    type: RECEIVE_USER_EVENTS,
    events: events 
})

// const receiveNewEvent = event => ({
//     type: RECEIVE_NEW_EVENT,
//     event: event 
// })

// const alterEvent = eventId => ({
//     type: EDIT_EVENT,
//     eventId: eventId 
// })


const removeEvent = eventId => ({
    type: REMOVE_EVENT,
    eventId: eventId
})

export const requestEvents = () => dispatch => {
    // debugger
    return EventAPIUtil.fetchEvents()
        .then(events => dispatch(receiveEvents(events)))
        // .catch(err => console.log(err.responseJSON));
}

export const requestEvent = (eventId) => dispatch => {
    return EventAPIUtil.fetchEvent(eventId)
        .then(event => dispatch(receiveEvent(event)))
        // .catch(err => console.log(err.responseJSON));
}

export const requestUserEvents = (userId) => dispatch => {
    return EventAPIUtil.fetchUserEvents(userId)
        .then(events => dispatch(receiveUserEvents(events)))
        // .catch(err => console.log(err.responseJSON));
}

export const createEvent = event => dispatch => {
    // console.log(EventAPIUtil.createEvent(event))
    return EventAPIUtil.createEvent(event)
        .then(event => dispatch(receiveEvent(event)))
        // .catch(err => console.log(err.responseJSON));
}

export const changeEvent = event => dispatch => {
    return EventAPIUtil.updateEvent(event)
        .then(event => dispatch(receiveEvent(event)))
        .catch(err => console.log(err.responseJSON));
}

export const deleteEvent = eventId => dispatch => {
    return EventAPIUtil.deleteEvent(eventId)
        .then(event => dispatch(removeEvent(event.id)))
        .catch(err => console.log(err.responseJSON));
}

export const createRegistration = eventId => dispatch => {
    return EventAPIUtil.createRegistration(eventId)
        .then(event => {
            dispatch(receiveEvents(event))
        })
}

export const deleteRegistration = (eventId, registrationId) => dispatch => {
    return EventAPIUtil.deleteRegistration(eventId, registrationId)
        .then(events => {
            dispatch(receiveEvents(events))
        })
}

export const fetchRegistrations = userId => dispatch => {
    return EventAPIUtil.fetchRegistrations(userId)
        .then(events => {
            debugger
            return dispatch(receiveEvents(events))
            
                }
            )

}
