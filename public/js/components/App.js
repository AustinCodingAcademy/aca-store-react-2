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
        let content = []
        if (this.state.displayedState == 0) {
            content = <ProductList products={this.props.products}
                addToCart={this.addItemToCart}
            />
        } else if (this.state.displayedState == 1) {
            content = <ShoppingCart shoppingCart={this.state.shoppingCart} />
        } else {
            content = null;
        }
        return <Layout
            shoppingCart={this.state.shoppingCart}
            displayOtherState={this.displayOtherState}
        >
            {content}
        </Layout>
    }
}

App.propTypes = {
    products: PropTypes.array.isRequired
}