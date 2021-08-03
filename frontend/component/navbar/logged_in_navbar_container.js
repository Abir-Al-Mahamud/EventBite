import { connect } from 'react-redux';
import UserNavbar from './user_navbar';
import { logout } from '../../actions/session'

const mSTP = (state) => ({
    currentUser: state.session.id
})

const mDTP = (dispatch) => ({
    logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(UserNavbar);