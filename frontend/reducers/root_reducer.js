import { combineReducers } from 'redux';
import entities from './entities';
import errors from './session_errors_reducer';
import session from './session_reducer';
import EventsReducer from './events_reducer';

const rootReducer = combineReducers({
    session,
    errors,
    events: EventsReducer
})

export default rootReducer;

