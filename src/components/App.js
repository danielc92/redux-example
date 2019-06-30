import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUser } from "../actions/user-actions";
import { addProduct } from "../actions/product-actions";


class App extends Component {

    // Arrow functions have access to "this"
    thisUpdateUser = () => {
        this.props.propsUpdateUser({name: "George"});
    }

    thisAddProduct = () => {
        let product = {
            name: "Some product",
            price: 9999,
            category: "office",
            id: Math.random()
        }
        this.props.propsAddProduct(product);
        this.setState({key: Math.random()})
    }

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
                    this.props.products.map(item => <li key={item.id}>{item.name} - ${item.price}</li>)
                }
            </ul>
            <h3>Update the user</h3>
            <button onClick={this.thisUpdateUser}>GO</button>

            <h3>Add product</h3>
            <button onClick={this.thisAddProduct}>GO</button>
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