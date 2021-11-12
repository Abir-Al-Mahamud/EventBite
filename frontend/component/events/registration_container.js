import { connect } from 'react-redux';
import { createRegistration, deleteRegistration, fetchRegistrations } from '../../actions/events';
import { requestEvent, requestEvents, deleteEvent } from '../../actions/events';
import Registration from './registration';
import { withRouter } from 'react-router-dom'

const mSTP = (state, ownProps) => {
    return {
        currentUserId: state.session.id,
        events: Object.values(state.entities.events),
        event: state.entities.events[ownProps.match.params.eventId],
        registrations: Object.values(state.entities.registrations),
    }
}

const mDTP = dispatch => ({
    createRegistration: eventId => dispatch(createRegistration(eventId)),
    deleteRegistration: (eventId, registrationId) => dispatch(deleteRegistration(eventId, registrationId)),
    fetchRegistrations: userId => dispatch(fetchRegistrations(userId))
})

export default withRouter(connect(mSTP, mDTP)(Registration))