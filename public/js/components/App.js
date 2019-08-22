class App extends React.Component {
    state = {
        shoppingCart: []
    }
    addItemToCart = (product) => {
        this.setState(() => {
            this.state.shoppingCart.push(product);
            return { shoppingCart: this.state.shoppingCart }
        })
    }
    render() {
        const productDetails = this.props.products.map((p, i) => {
            return <ProductDetail
                addToCart={this.addItemToCart}
                key={i}
                product={p} />
        });
        return (
            <Layout> </Layout>
        );
    }
}