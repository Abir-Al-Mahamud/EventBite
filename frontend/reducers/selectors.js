export const selectEvent = ({ events }, eventId) => {
    return events[eventId];
};

export const asArray = ({ events }) => (
    Object.keys(events).map(key => events[key])
);