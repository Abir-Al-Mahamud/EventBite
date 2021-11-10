import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import eventErrorsReducer from './events_errors_reducer'

export default combineReducers({
    session: sessionErrorsReducer,
    event: eventErrorsReducer

});