import { connect } from 'react-redux';
import { createRegistration, deleteRegistration, fetchRegistrations } from '../../actions/events';
import { requestEvent, requestEvents, deleteEvent } from '../../actions/events';
import Registration from './registration';

const mSTP = (state, ownProps) => {
    return {
        currentUserId: state.session.id,
        event: state.entities.events[ownProps.match.params.eventId] 
    }
}

const mDTP = dispatch => ({
    createRegistration: eventId => dispatch(createRegistration(eventId)),
    deleteRegistration: (eventId, registrationId) => dispatch(deleteRegistration(eventId, registrationId)),
    fetchRegistrations: userId => dispatch(fetchRegistrations(userId))
})

export default connect(mSTP, mDTP)(Registration)