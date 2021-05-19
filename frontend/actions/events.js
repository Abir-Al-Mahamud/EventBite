import * as EventAPIUtil from '../utils/event_utils';

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const REMOVE_EVENT = "REMOVE_EVENT";

const receiveEvents = events => ({
    type: RECEIVE_EVENTS,
    events: events 
})

const receiveEvent = event => ({
    type: RECEIVE_EVENT,
    event: event 
})

const removeEvent = eventId => ({
    type: REMOVE_EVENT,
    eventId: eventId
})

export const requestEvents = () => dispatch => {
    return EventAPIUtil.fetchEvents()
        .then(events => dispatch(receiveEvents(events)))
}

export const requestEvent = (eventId) => dispatch => {
    return EventAPIUtil.fetchEvent(eventId)
        .then(event => dispatch(receiveEvent(event)))
}

export const createEvent = event => dispatch => {
    return EventAPIUtil.createEvent(event)
        .then(event => dispatch(receiveEvent(event)))
}

export const updateEvent = event => dispatch => {
    return EventAPIUtil.updateEvent(event)
        .then(event => dispatch(receiveEvent(event)))
}

export const deleteEvent = eventId => dispatch => {
    return EventAPIUtil.deleteEvent(eventId)
        .then(event => dispatch(removeEvent(event.id)))
}