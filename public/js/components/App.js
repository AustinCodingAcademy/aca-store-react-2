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
    changeView = (view)=>{
        this.setState({whatToShow:view})
    }
    componentDidMount(){
        fetch("https://acastore.herokuapp.com/products")
            .then(r=>r.json())
            .then(data =>{
                console.log(data)
                this.setState({products:data})
            })
    }
    render(){
        let content = null;
        if(this.state.whatToShow === 1){
            content = <ShoppingCart 
                        cart={this.state.shoppingCart} 
                        addItemToCart={this.addItemToCart}
                        />
        }else if(this.state.whatToShow === 0){
            content = <ProductList 
                        products={this.state.products} 
                        addItemToCart={this.addItemToCart}
                        />
        }
        return (
            <Layout 
                shoppingCart={this.state.shoppingCart} 
                addItemToCart={this.addItemToCart}
                products={this.state.products}
                changeView={this.changeView}
                >
                {content}
            </Layout>
        );
    }
}

// Sending out state.shoppingCart, addItemToCart(), products, whatToShow, changeView()