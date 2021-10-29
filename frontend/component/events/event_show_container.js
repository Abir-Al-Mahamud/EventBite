import { connect } from 'react-redux';
import { requestEvent, requestEvents, deleteEvent } from '../../actions/events';
import { selectEvent } from '../../reducers/selectors';
import { createRegistration, deleteRegistration, fetchRegistrations } from '../../actions/events';

import EventShow from './event_show';

const mSTP = (state, ownProps) => {
    // debugger
    const eventId = ownProps.match.params.eventId
    return{
    
    currentUser: state.session.id,
    event: state.entities.events[ownProps.match.params.eventId], 
    registrations: Object.values(state.entities.registrations),
    registration: state.entities.registrations[ownProps.match.params.eventId]
    }
}
    

const mDTP = dispatch => {
    // debugger
    return{
        fetchEvent: id => dispatch(requestEvent(id)), 
        deleteEvent: (eventId) => dispatch(deleteEvent(eventId)),
        createRegistration: eventId => dispatch(createRegistration(eventId)),
        deleteRegistration: (eventId, registrationId) => dispatch(deleteRegistration(eventId, registrationId)),
        fetchRegistrations: userId => dispatch(fetchRegistrations(userId))
    }
};

export default connect(mSTP, mDTP)(EventShow);