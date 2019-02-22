class App extends React.Component{
   state={
       shoppingCart:[],
       homePage: 0
   }

    changeHomePage = (num) => {
        this.setState(()=>{
            return {homePage:num};
        })
    }

   addItemToCart = (product)=> {
    this.setState(()=>{
        this.state.shoppingCart.push(product);
        return {shoppingCart:this.state.shoppingCart}
    })
   }

   render(){
       let content = null;
       if (this.state.homePage === 0){
        content = <ProductList
                   products={this.props.products}
                   addToCart={this.addItemToCart}
                />
       } else if(this.state.homePage === 1){
        content = <ShoppingCart
                   products={this.props.products}
                   cart={this.state.shoppingCart}
               />
       }
        
       return(
       <Layout
       cart={this.state.shoppingCart}
       products={this.props.products}
       addItemToCart={this.addItemToCart}
       changeHomePage={this.changeHomePage}
       >
        {content}
       </Layout>

        )
    
    }
}

App.PropTypes = {
    products: PropTypes.array.
}