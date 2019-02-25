class App extends React.Component{
   state={
       shoppingCart:[],
       view: "products"
   }
   addItemToCart = (product)=> {
    this.setState(()=>{
        this.state.shoppingCart.push(product);
        return {shoppingCart:this.state.shoppingCart}
    })
   }
   changeView = (page)=> {
       return page === "products" ? 
       this.setState({
           return {view = "products"}     
        }) :
        this.setState({
            return {view = "cart"}
        })
   }
   
   render(){

       console.log('props.products', this.props.products)
            return  (
                <Layout 
                    shoppingCart = {this.state.shoppingCart}
                    products={this.props.products}
                    changeView={this.changeView}
                >
                    <ProductList 
                        products = {this.props.products} 
                        addItemToCart= {this.addItemToCart}
                    />
                    {console.log('layout props', this.props)}
                        { this.state.view === "products"? 
                        <ProductList products = {this.props.products} addItemToCart= {this.addItemToCart}/> : 
                        <ShoppingCart 
                            cart= {this.state.shoppingCart}
                            addItemToCart={this.addItemToCart}/> 
                        }
            
                </Layout>

            )
   }
}