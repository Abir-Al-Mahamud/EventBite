import { connect } from 'react-redux';

import { requestEvent, requestEvents, deleteEvent } from '../../actions/events';

import { selectEvent } from '../../reducers/selectors';
import { createRegistration } from '../../utils/event_utils';

import EventShow from './event_show';

const mSTP = (state, ownProps) => {
    // debugger
    return{
    // const eventId = parseInt(match.params.eventId);
    // const event = selectEvent(state.entities, eventId);

    currentUser: state.session.id,
    event: state.entities.events[ownProps.match.params.eventId] 
    }
}
    

const mDTP = dispatch => ({
    fetchEvent: id => dispatch(requestEvent(id)), 
    deleteEvent: () => dispatch(deleteEvent()),
    createRegistration: eventId => dispatch(createRegistration(eventId)),
    deleteRegistration: (eventId, registrationId) => dispatch(deleteRegistration(eventId, registrationId)),
    fetchRegistrations: userId => dispatch(fetchRegistrations(userId))
});

export default connect(mSTP, mDTP)(EventShow);