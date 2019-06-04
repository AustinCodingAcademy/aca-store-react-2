class App extends React.Component{
    state={
        shoppingCart:[],
        viewProducts:"ProductsList"
    }
    addItemToCart = (product)=> {
     this.setState(()=>{
         this.state.shoppingCart.push(product);
         return {shoppingCart:this.state.shoppingCart}
     })
    }
    render(){
             return (  
             <div className="App">
                <Layout state={this.state}>
                    <ProductList products={this.props.products}/>
                    
                </Layout>
             </div>
         );
    }
 }