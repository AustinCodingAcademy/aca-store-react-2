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
   render(){
        const productDetails = this.props.products.map((p,i)=>{
            return  <ProductDetail 
            addToCart={this.addItemToCart}
            key={i} 
            product={p} />
        });
   }
   return(  
        <Layout
            shoppingCart={this.state.shoppingCart}
            products={this.state.products}
            addItemToCart={this.addItemToCart}
            >
            
        </Layout>
   );
   
}