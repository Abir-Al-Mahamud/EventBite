import { connect } from 'react-redux';
import { requestEvents } from '../../actions/events';
import EventIndex from './event_index';

const mSTP = (state) => {
    return {
    // signedIn: state.session.isAuthenticated,
    // userId: state.session.user.id,
    events: Object.values(state.entities.events)
}
}

const mDTP = (dispatch) => ({
    requestEvents: () => dispatch(requestEvents())
});

export default connect(mSTP, mDTP)(EventIndex);