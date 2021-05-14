import { createStore, applyMiddleWare } from 'redux';
import logger from 'redux-logger';

import rootReducer from '../reducers/root';
import thunk from 'redux-thunk';

const configureStore = (preloadedState = {}) => createStore(
    rootReducer, preloadedState, applyMiddleWare(thunk, logger)
)

export default configureStore;