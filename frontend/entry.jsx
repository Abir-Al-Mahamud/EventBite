import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './component/root'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let preloadedState = undefined;
    if (window.user) {
        preloadedState = {
            session: {
                currentUser: window.user 
            }
        };
    }
    const store = configureStore(preloadedState);
    ReactDOM.render(<Root store={store}/>, root);
})