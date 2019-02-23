class App extends React.Component{
    state={
        shoppingCart:[],
        whatToShow: 0,
    }
    addItemToCart = (product)=> {
     this.setState(()=>{
         this.state.shoppingCart.push(product);
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
        content = <ProductList products = {this.props.products} addItemToCart={this.addItemToCart}/>
    } else if(this.state.whatToShow == 1){
        content = <ShoppingCart shoppingCart = {this.state.shoppingCart}/>
    }

    return <Layout addItemToCart={this.addItemToCart}
    shoppingCart = {this.state.shoppingCart}
    products = {this.props.products}
    whatWeSee = {this.whatWeSee}
    whatToShow = {this.state.whatToShow}>
    {content}
    </Layout>
   }
};

App.propTypes = {
    products: PropTypes.array.isRequired
  };