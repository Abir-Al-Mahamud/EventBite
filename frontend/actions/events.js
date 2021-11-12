import event_index from '../component/events/event_index';
import * as EventAPIUtil from '../utils/event_utils';
import * as RegistrationApiUtil from '../utils/registration_utils';


//Events
export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const RECEIVE_USER_EVENTS = "RECEIVE_USER_EVENTS";
export const RECEIVE_NEW_EVENT = "RECEIVE_NEW_EVENT";
export const REMOVE_EVENT = "REMOVE_EVENT";
export const EDIT_EVENT = "EDIT_EVENT";
export const RECEIVE_EVENT_ERRORS = "RECEIVE_EVENT_ERRORS";
export const REMOVE_EVENT_ERRORS = "REMOVE_EVENT_ERRORS";
//Registrations
export const RECEIVE_REGISTRATIONS = 'RECEIVE_REGISTRATIONS';
export const RECEIVE_REGISTRATION = 'RECEIVE_REGISTRATION';
export const DELETE_REGISTRATION = 'DELETE_REGISTRATION';
export const RECEIVE_REGISTRATION_ERRORS = 'RECEIVE_REGISTRATION_ERRORS';



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

const receiveEventErrors = errors => ({
    type: RECEIVE_EVENT_ERRORS,
    errors
})

const removeEventErrors = () => {
    return {
        type: REMOVE_EVENT_ERRORS
    }
}

const receiveRegs = registrations => ({
    type: RECEIVE_REGISTRATIONS,
    registrations: registrations
})

const receiveReg = registration => ({
    type: RECEIVE_REGISTRATION,
    registration: registration
})

const deleteReg = unregistration => ({
    type: DELETE_REGISTRATION,
    unregistration: unregistration
})

const receiveErrors = err => ({
    type: RECEIVE_REGISTRATION_ERRORS,
    err
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

export const requestUserEvents = (userId) => dispatch => {
    return EventAPIUtil.fetchUserEvents(userId)
        .then(events => dispatch(receiveUserEvents(events)),
        )
}

export const createEvent = event => dispatch => {
    return EventAPIUtil.createEvent(event)
        .then(event => dispatch(receiveEvent(event)),
        err => {
                return dispatch(receiveEventErrors(err.responseJSON))
            }
        )
}

export const changeEvent = event => dispatch => {
    return EventAPIUtil.updateEvent(event)
        .then(event => dispatch(receiveEvent(event)),
            err => {
                return dispatch(receiveEventErrors(err.responseJSON))
            }
        )
}

export const deleteEvent = eventId => dispatch => {
    return EventAPIUtil.deleteEvent(eventId)
        .then(event => {
            dispatch(removeEvent(event.id))
        })
}

export const createRegistration = eventId => dispatch => {
    return EventAPIUtil.makeRegistration(eventId)
        .then(event => {
            dispatch(receiveReg(event))
        })
}
 
export const deleteRegistration = (eventId, registrationId) => dispatch => {
    return EventAPIUtil.removeRegistration(eventId, registrationId)
        .then(events => {
            dispatch(deleteReg(events))
        })
}

export const fetchRegistrations = userId => dispatch => {
    return EventAPIUtil.getRegistrations(userId)
        .then(registrations => { 
            return dispatch(receiveRegs(registrations))
                }  
            )
 
}

export const clearEventErrors = () => dispatch => {
    return dispatch(removeEventErrors())
};
 