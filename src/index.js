import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import productReducer from './reducers/product-reducer';
import userReducer from './reducers/user-reducer';

// merged reducers includes all reducers from reducers folder
const mergedReducer = combineReducers({
    user: userReducer,
    products: productReducer
})

// The redux store
// Takes in 3 arguments (reducers, initial state, modifiers)
const store = createStore(
    mergedReducer,
    {
        user: {
                name: 'Daniel', 
                email: 'danielc.92@outlook.com'
              },
        products: [
            { id: 1, name: 'Shower curtains', price: 35.23}, 
            { id: 2, name: 'Towels', price: 14.43},
            { id: 3, name: 'Monitor', price: 224.32}
        ]
    },
    window.devToolsExtension && window.devToolsExtension()
)


// Provider wraps the entire App, passing in store as props
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
