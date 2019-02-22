class App extends React.Component{
   state={
       shoppingCart:[],
       thingToShow:0
   }
   addItemToCart = (product)=> {
    this.setState(()=>{
        this.state.shoppingCart.push(product);
        return {shoppingCart:this.state.shoppingCart}
    })
   }

    changeView = (buttonClicked) =>{
        this.setState(()=>{
            return {thingToShow:buttonClicked}
        })
    }

    render(){
        let content = null;
        if(this.state.thingToShow==0){
            content = <ProductList products={this.props.products} addItemToCart={this.addItemToCart}/>
        }else if(this.state.thingToShow==1){
            content = <ShoppingCart shoppingCart={this.state.shoppingCart} />
        }
        return (<Layout shoppingCart={this.state.shoppingCart} 
        products={this.props.products}
        addItemToCart={this.addItemToCart}
        changeView={this.changeView}
        thingToShow={this.state.thingToShow}
        >
        {content}
        </Layout>)
    }
}

App.propTypes = {
    products: PropTypes.array.isRequired
}