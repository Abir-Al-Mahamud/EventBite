import { combineReducers } from 'redux';
import entitiesReducer from './entities';
import sessionReducer from './session';

const rootReducer = combineReducers({
    session: sessionReducer
})

export default rootReducer;

