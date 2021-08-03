import { combineReducers } from 'redux';
import entities from './entities_reducer';
import errors from './session_errors_reducer';
import session from './session_reducer';
import eventsReducer from './events_reducer';

const rootReducer = combineReducers({
    entities,
    session,
    eventsReducer,
    errors
})

export default rootReducer;

