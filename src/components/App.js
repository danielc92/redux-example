import React, { Component } from 'react';
import { connect } from 'react-redux';
import updateUser from '../actions/user-actions';
import addProduct from '../actions/product-actions';


class App extends Component {
    render() {
        return (
            <div>
                <h1>Redux Example</h1>
            </div>
        )
    }
}

export default App