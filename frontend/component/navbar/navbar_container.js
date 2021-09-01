import { connect } from 'react-redux';
import Navbar from './navbar';
import { logout } from '../../actions/session'
import { requestUserEvents } from '../../actions/events';

const mSTP = (state) => ({
    currentUser: state.session.id
})

const mDTP = (dispatch) => ({
    logout: () => dispatch(logout()),
    requestUserEvents: () => dispatch(requestUserEvents())
})

export default connect(mSTP, mDTP)(Navbar);