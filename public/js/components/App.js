class App extends React.Component {
    state = {
        shoppingCart: [],
        displayedState: 0,
        products: []
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

    componentDidMount() {
        fetch('https://acastore.herokuapp.com/products')
            .then(response => response.json())
            .then(data => this.setState({ products: data }));
    }

    render() {
        let content = []
        if (this.state.displayedState == 0) {
            // why do I need .length here???
            if (this.state.products.length != 0) {
                content = <ProductList products={this.state.products}
                    addToCart={this.addItemToCart}
                />
            } else {
                content = <div>No products available</div>
            }
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