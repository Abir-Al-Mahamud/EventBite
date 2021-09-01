import { connect } from 'react-redux';
import UserEvents from './user_events';
import { logout } from '../../actions/session'
import { requestUserEvents } from '../../actions/events';

const mSTP = (state) => ({
    events: Object.values(state.entities.events),
    currentUser: state.session.id
})

const mDTP = (dispatch) => ({
    requestUserEvents: (userId) => dispatch(requestUserEvents(userId))
})

export default connect(mSTP, mDTP)(UserEvents);