import { connect } from 'react-redux';
import Navbar from './navbar';
import { logout } from '../../actions/session'

const mSTP = (state) => ({
    currentUser: state.session.id
})

const mDTP = (dispatch) => ({
    logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(Navbar);