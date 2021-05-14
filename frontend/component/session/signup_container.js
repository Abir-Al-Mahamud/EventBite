import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session'
import SignUp from './signup'

const mDTP = dispatch => ({
    createUser : form => dispatch(createNewUser(form))
})

export default connect(null, mDTP)(SignUp);