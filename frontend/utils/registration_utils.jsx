export const registerUser = (event_id) => {
    return $.ajax({
        method: 'POST',
        url: `/api/events/${event_id}/registrations`
    })
}
export const cancelRegisterUser = (id) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/registration`,
        data: id
    })
}
