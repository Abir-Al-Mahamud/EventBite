export const fetchEvents = () => {
    // debugger
    return $.ajax({
        url: '/api/events',
        method: 'GET'
    })
}

export const fetchEvent = (eventId) => {
    return $.ajax({
        url: `/api/events/${eventId}`,
        method: 'GET'
    })
}

export const fetchUserEvents = author_id => {
    return $.ajax({
        url: `/api/users/${author_id}/events`,
        method: 'GET'
    })
}

export const createEvent = (event) => {
    // debugger
    return $.ajax({
        url: `/api/events`,
        method: 'POST',
        data: { event } 
    })
}

export const updateEvent = ({event}) => {
    return $.ajax({
        url: `/api/events/${event.id}`,
        method: 'PATCH',
        data: { event }
    })
}

export const deleteEvent = (eventId) => {
    return $.ajax({
        url: `/api/events/${eventId}`,
        method: 'DELETE'
    })
}

export const createRegistration = (eventId) => {
    return $.ajax({
        url: `/api/events/${eventId}/registrations`,
        method: 'POST'
    })
}

export const fetchRegistrations = (userId) => {
    return $.ajax({
        url: `/api/users/${userId}/registrations`,
        method: 'GET'
    })
}

export const deleteRegistration = (eventId, registrationId) => {
    return $.ajax({
        url: `/api/events/${eventId}/registrations/${registrationId}`,
        method: 'DELETE'
    })
}