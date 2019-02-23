class App extends React.Component{
   state={
       products:[],
       shoppingCart:[],
       thingToShow:0
   }
   addItemToCart = (product)=> {
    this.setState((state,props)=>{
        state.shoppingCart.push(product);
        return {shoppingCart:state.shoppingCart}
    })
   }

   removeItemFromCart = (index)=> {
    this.setState((state,props)=>{
        state.shoppingCart.splice(index,1)
        return {shoppingCart:state.shoppingCart}
    })
   }

    changeView = (buttonClicked) =>{
        this.setState(()=>{
            return {thingToShow:buttonClicked}
        })
    }

    componentDidMount() {
        fetch('https://acastore.herokuapp.com/products')
            .then(response => response.json())
            .then(data => this.setState({products:data}));
    }



    render(){
        let content = null;
        if(this.state.thingToShow==0){
            
            if(this.state.products){
                content = <ProductList products={this.state.products} addItemToCart={this.addItemToCart}/>
            }else{
                content = <p>No products available</p>
            }
        }else if(this.state.thingToShow==1){
            if(this.state.shoppingCart.length != 0 ){                
                content = <ShoppingCart shoppingCart={this.state.shoppingCart} removeItemFromCart={this.removeItemFromCart}/>
            }else{
                content = <p>No items in cart</p>
            }        
        }
        return (<Layout shoppingCart={this.state.shoppingCart} 
        products={this.state.products}
        // products={this.props.products}
        // fetchProducts={this.state.products}
        addItemToCart={this.addItemToCart}
        changeView={this.changeView}
        thingToShow={this.state.thingToShow}
        removeItemFromCart={this.removeItemFromCart}
        >
        {content}
        </Layout>)
    }
}

App.propTypes = {
    products: PropTypes.array.isRequired
}