import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import productReducer from './reducers/product-reducer';
import userReducer from './reducers/user-reducer';
import JSON from './initialState.json';


// merged reducers includes all reducers from reducers folder
const mergedReducer = combineReducers({
    user: userReducer,
    products: productReducer
})

// The redux store
// Takes in 3 arguments (reducers, initial state, modifiers)
const store = createStore(
    mergedReducer,
    JSON,
    window.devToolsExtension && window.devToolsExtension()
)


// Provider wraps the entire App, passing in store as props
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
