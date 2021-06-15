export const fetchEvents = () => {
    return $.ajax({
        url: '/api/events'
    })
}

export const fetchEvent = (eventId) => {
    return $.ajax({
        url: `/api/events/${eventId}`
    })
}

export const fetchUserEvents = id => {
    return $.ajax({
        url: `/api/events/user/${id}`
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