import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// The redux store
// Takes in 3 arguments (reducers, initial state, modifiers)
store = createStore(

)


// Provider wraps the entire App, passing in store as props
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
