class App extends React.Component{
   state={
       shoppingCart:[],
       products:[],
       whatToShow: 0
   }
   addItemToCart = (product)=> {
    this.setState(()=>{
        this.state.shoppingCart.push(product);
        return {shoppingCart:this.state.shoppingCart}
    })
   }
   removeItemFromCart = (productKey)=> {
    this.setState(()=>{
        this.state.shoppingCart.splice(productKey, (productKey + 1));
        return {shoppingCart:this.state.shoppingCart}
    })
   }
   whatWeSee = (changedState)=>{
       this.setState(()=>{
           return {whatToShow:changedState}
       })
   }
   render(){
       let content = null;
       if(this.state.whatToShow == 0){
           content = <ProductList products = {this.state.products}
            addItemToCart={this.addItemToCart}
            whatToShow={this.state.whatToShow}/>
       } else if(this.state.whatToShow == 1){
           if(this.state.shoppingCart.length > 0){
               content = <ShoppingCart shoppingCart = {this.state.shoppingCart}
               removeFromCart={this.removeFromCart}
               whatToShow={this.state.whatToShow}/>
           }else{
               content=<h1>Cart is empty.</h1>
           }
       }
   
   return <Layout
            shoppingCart={this.state.shoppingCart}
            products={this.state.products}
            addItemToCart={this.addItemToCart}
            whatToShow={this.state.whatToShow}
            whatWeSee={this.whatWeSee}
            >
          {content}  
        </Layout>
   }
}

App.propTypes = {
    products: PropTypes.array
}