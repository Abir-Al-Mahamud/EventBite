export const fetchEvents = () => {
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
    return $.ajax({
        url: `/api/events`,
        method: 'POST',
        data: { event } 
    })
}

export const updateEvent = (event) => {
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

export const makeRegistration = (eventId) => {
    return $.ajax({
        url: `/api/events/${eventId}/registrations`,
        method: 'POST'
    })
}

export const getRegistrations = (userId) => {
    return $.ajax({
        url: `/api/users/${userId}/registrations`,
        method: 'GET'
    })
}

export const removeRegistration = (eventId, registrationId) => {
    return $.ajax({
        url: `/api/events/${eventId}/registrations/${registrationId}`,
        method: 'DELETE'
    })
}