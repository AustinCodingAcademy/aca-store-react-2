class App extends React.Component{
    state={
        shoppingCart:[],
        whatToShow: 0,
        products: [],
    }

    componentDidMount(){
        fetch('https://acastore.herokuapp.com/products')
        .then(response => response.json())
        .then(products => this.setState({ products }));
      }

    addItemToCart = (product)=> {
     this.setState(()=>{
         this.state.shoppingCart.push(product);
         return {shoppingCart:this.state.shoppingCart}
     })
    }
    removeItemFromCart = (productKey) => {
        this.setState(()=>{
            this.state.shoppingCart.splice(productKey, (productKey + 1));
            return {shoppingCart:this.state.shoppingCart}
     })
    }
    whatWeSee = (changedState) => {
        this.setState(()=>{
            return {whatToShow:changedState}
        })
    }
   render(){
    let content = null;
    if(this.state.whatToShow == 0){
        content = <ProductList products = {this.state.products} 
            addItemToCart={this.addItemToCart}
            whatToShow = {this.state.whatToShow}/>
    } else if(this.state.whatToShow == 1){
        if(this.state.shoppingCart.length > 0){
            content = <ShoppingCart shoppingCart = {this.state.shoppingCart}
                removeFromCart={this.removeItemFromCart}
                whatToShow = {this.state.whatToShow}/>
        } else {
            content = <h1> No Products in Cart at this time</h1>
        }
    }

    return <Layout addItemToCart={this.addItemToCart}
        shoppingCart = {this.state.shoppingCart}
        products = {this.state.products}
        whatWeSee = {this.whatWeSee}
        whatToShow = {this.state.whatToShow}>
    {content}
    </Layout>
   }
}

App.propTypes = {
    products: PropTypes.array
  }

