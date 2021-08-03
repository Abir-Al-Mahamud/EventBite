import { connect } from 'react-redux';
import { requestEvent, changeEvent } from '../../actions/events';
import EventDetail from "./event_detail";

const mSTP = (state, ownProps) => {
    return {
        signedIn: state.session.isAuthenticated,
        eventId: ownProps.match.params.eventId,
        // username: state.session.user.id,
        // userId: state.session.user.id,
        event: state.events
    }
}

const mDTP = dispatch => ({
    fetchEvent: eventId => dispatch(requestEvent(eventId)),
    editEvent: event => dispatch(changeEvent(event.id))
})

export default connect(mSTP, mDTP)(EventDetail);