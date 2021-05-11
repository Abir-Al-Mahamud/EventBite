import React from 'react';
import ReactDOM from 'react-dom';
import createStore from 'createstore'
import Root from ''

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = createStore();
    ReactDOM.render(<Root />, root);
})