import { connect } from 'react-redux';
import { requestEvents, requestUserEvents } from '../../actions/events';
import EventIndex from './event_index';

const mSTP = (state) => {
    
    return {
    events: Object.values(state.entities.events)
    // currentUserId
}
}

const mDTP = (dispatch) => ({
    requestEvents: () => dispatch(requestEvents()),
    requestUserEvents: () => dispatch(requestUserEvents())
});

export default connect(mSTP, mDTP)(EventIndex);