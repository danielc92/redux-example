import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../actions/user-actions';
import { addProduct } from '../actions/product-actions';


class App extends Component {
    render() {
        console.log(this.props)
        return (
            <React.Fragment>
            <div>
                <h1>Redux Example</h1>
            </div>
            <h3>USER FROM PROPS</h3>
            <p>{ this.props.user.name }</p>
            <h3>PRODUCTS FROM PROPS</h3>
            <ul>
                {
                    this.props.products.map(item => <li>{item.name} - ${item.price}</li>)
                }
            </ul>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        user: state.user,
        products: state.products
    }
}

const mapActionsToProps = {
    propsAddProduct: addProduct,
    propsUpdateUser: updateUser
}

export default connect(mapStateToProps, mapActionsToProps)(App);