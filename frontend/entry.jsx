import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './component/root';

document.addEventListener('DOMContentLoaded', () => {
    
    let store;
    // debugger;
    if (window.currentUser) {
        const preloadedState = {
            session: {
                id: window.currentUser.id 
            },
            entities: { users:
                { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        // debugger;
        delete window.currentUser;
    } else {
        store = configureStore();
        // debugger;
    }
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});