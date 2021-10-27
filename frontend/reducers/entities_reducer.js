import { combineReducers } from 'redux';

import users from './users_reducer';
import events from './events_reducer';
import eventsReducer from './events_reducer';
import usersReducer from './users_reducer';
import registrationsReducer from './registrations_reducer';

export default combineReducers({
    events: eventsReducer,
    users: usersReducer,
    registrations: registrationsReducer

});