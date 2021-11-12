import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestEvent, changeEvent, clearEventErrors } from '../../actions/events';
import EditEventForm from './edit_form';


const mSTP = (state, ownProps) => {
    return {
        event: state.entities.events[ownProps.match.params.eventId],
        formType: 'Edit Event',
        currentUserId: state.session.currentUserId ,

    }
}

const mDTP = (dispatch) => {
    return {
        fetchEvent: eventId => dispatch(requestEvent(eventId)),
        submitEvent: (data, eventId) => dispatch(changeEvent(data, eventId)),
        clearEventErrors: (errors) => dispatch(clearEventErrors(errors))
    }
}

export default withRouter(connect(mSTP, mDTP)(EditEventForm));