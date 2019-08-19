class App extends React.Component {
  state = {
    shoppingCart: [],
    products: [],
    showing: 0
  };
  addItemToCart = product => {
    this.setState(() => {
      this.state.shoppingCart.push(product);
      return { shoppingCart: this.state.shoppingCart };
    });
  };
  changeView = show => {
    this.setState({ showing: show });
  };
  render() {
    let page = null;
    if (this.state.showing === 0) {
      page = (
        <ProductList
          products={this.state.products}
          addItemToCart={this.state.addItemToCart}
        />
      );
    } else if (this.state.showing === 1) {
      page = (
        <ShoppingCart
          shoppingCart={this.state.shoppingCart}
          addItemToCart={this.state.addItemToCart}
        />
      );
    }

    return (
      <Layout
        shoppingCart={this.state.shoppingCart}
        addItemToCart={this.state.addItemToCart}
        products={this.state.products}
        changeView={this.changeShow}
      />
    );
  }
}
