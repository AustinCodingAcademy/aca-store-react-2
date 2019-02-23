class App extends React.Component {
    state = {
        shoppingCart: [],
        displayedState: 0
    }
    addItemToCart = (product) => {
        this.setState(() => {
            this.state.shoppingCart.push(product);
            return { shoppingCart: this.state.shoppingCart }
        })
    }

    displayOtherState = (otherState) => {
        this.setState(() => {
            return { displayedState: otherState }
        })
    }

    render() {
        return <Layout addItemToCart={this.addItemToCart}
            shoppingCart={this.state.shoppingCart}
            products={this.props.products}
            displayOtherState={this.displayOtherState}
            displayedState={this.state.displayedState}
        // whatToShow = {this.state.whatToShow}
        ></Layout>
    }
}