import { combineReducers } from 'redux';
import entities from './entities_reducer';
import errors from './session_errors_reducer';
import session from './session_reducer';
import events from './events_reducer';

const rootReducer = combineReducers({
    entities,
    session,
    // events,
    errors
})

export default rootReducer;

