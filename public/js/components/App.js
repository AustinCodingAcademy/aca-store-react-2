class App extends React.Component{
    state={
       shoppingCart:[],
       whatToShow: 0
    }
    addItemToCart = (product)=> {
        this.setState(()=>{
            this.state.shoppingCart.push(product);
            return {shoppingCart:this.state.shoppingCart}
    })
    }
    // showCart = ()=>{
    //     this.setState(()=>{
    //         return {whatToShow:1}
    //     })  
    // }
    // showProducts = ()=>{
    //     this.setState(()=>{
    //         return {whatToShow:0}
    //     })  
    // }
    changeView = (view)=>{
        debugger;
        this.setState({whatToShow:view})

    }

    render(){
        debugger;
        let content = null;
    if(this.state.whatToShow === 1){
        content = <ShoppingCart 
                    cart={this.state.shoppingCart} 
                    addItemToCart={this.addItemToCart}
                    />
    }else if(this.state.whatToShow === 0){
        content = <ProductList 
                    products={this.props.products} 
                    addItemToCart={this.addItemToCart}
                    />
    }
        return (  
            <Layout 
                shoppingCart={this.state.shoppingCart} 
                addItemToCart={this.addItemToCart}
                products={this.props.products}
                whatToShow={this.state.whatToShow}
                changeView={this.changeView}
                // showCart={this.showCart}
                // showProducts={this.showProducts}
                >
                {content}
            </Layout>
        );
    }
}

// Needs products!
// Sending out state.shoppingCart, addItemToCart(), products, whatToShow, showCart(), showProducts()