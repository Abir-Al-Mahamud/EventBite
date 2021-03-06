export const registerUser = (eventId) => {
    return $.ajax({
        method: 'POST',
        url: `/api/events/${eventId}/registrations`
    })
}
export const cancelRegisterUser = (id) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/registration`,
        data: id
    })
}
