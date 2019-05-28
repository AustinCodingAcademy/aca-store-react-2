class App extends React.Component{
    state={
        shoppingCart:[],
        displayed: 'products'
    }

    addItemToCart = (product)=> {
        this.setState(()=>{
            this.state.shoppingCart.push(product);
            return {shoppingCart:this.state.shoppingCart}
        })
    }

    viewCart = () => {
        this.setState({displayed: 'cart'});
        console.log(this.state.displayed);
    }

    viewProducts = () => {
        this.setState({displayed: 'products'});
        console.log(this.state.displayed);
    }

    render(){
        let toDisplay;
        if(this.state.displayed === 'products') {
            toDisplay = <ProductList addItemToCart={this.addItemToCart} products={this.props.products} />
        }
        else if(this.state.displayed === 'cart') {
            toDisplay = <ShoppingCart shoppingCart={this.state.shoppingCart}/>

        }
        
        return (  
            <Layout shoppingCart={this.state.shoppingCart} viewCart={this.viewCart} viewProducts={this.viewProducts}>
                {toDisplay}
            </Layout>
        );
    }
}