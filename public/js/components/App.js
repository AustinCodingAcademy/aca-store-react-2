class App extends React.Component{
   state={
       shoppingCart:[]
   }
   addItemToCart = (product)=> {
    this.setState(()=>{
        this.state.shoppingCart.push(product);
        return {shoppingCart:this.state.shoppingCart}
    })
   }
   render(){
            return (  
                <Layout 
                    shoppingCart={this.state.shoppingCart} 
                    addItemToCart={this.addItemToCart}
                    products={this.props.products}>
                </Layout>
        );
   }
}