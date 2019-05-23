class App extends React.Component{
   state={
       shoppingCart:[],
       showProducts: "ProductList"
   }
   addItemToCart = (product)=> {
    this.setState(()=>{
        this.state.shoppingCart.push(product);
        return {shoppingCart:this.state.shoppingCart}
    })
   }
   changeView = (showString) => {
       if (showString === "cart") {
           this.setState({showProducts: "ShoppingCart"})
       } else if (showString === "products") {
           this.setState({showProducts: "ProductList"})
       }
   }
   render(){
       let whatToRender;
       if (this.state.showProducts === "ProductList") {
             whatToRender = <ProductList products={this.props.products} addItemToCart={this.addItemToCart}/>
            
       } else if (this.state.showProducts === "ShoppingCart") { 
             whatToRender = <ShoppingCart cart={this.state.shoppingCart} addItemToCart={this.addItemToCart}/>
            
       }
       return <Layout changeView={this.changeView} state={this.state}> 
                {whatToRender}
            </Layout>
   }
}