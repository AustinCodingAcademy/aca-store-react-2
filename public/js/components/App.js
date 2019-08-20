class App extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            shoppingCart:[],
            products: [],
            listCart: true
        }
    }

    componentDidMount = () => {
        fetch('https://acastore.herokuapp.com/products') 
            .then(res => res.json())
            .then(data => 
                this.setState({products: data})
                )
                .catch(err=> console.log(`Error: ${err}`))
    }
    
    addToCart = (product)=> {
    this.setState(()=>{
        this.state.shoppingCart.push(product);
        return {shoppingCart:this.state.shoppingCart}
        })
    }
    
    viewCart = (boo) => {
       this.setState(()=>{
           !boo ? this.state.listCart = true : this.state.listCart = false;
           return {listCart: this.state.listCart}
       })
    }

    render(){
        let display = this.state.listCart;
        let container = null;
        display ? container = <ProductList products={this.state.products} addToCart={this.state.addToCart}/>
                : container = <ShoppingCart shoppingCart={this.state.shoppingCart} addToCart={this.state.addToCart}/>

        return <Layout 
                    shoppingCart={this.state.shoppingCart}
                    products={this.state.products}
                    addToCart={this.addToCart}
                    viewCart={this.viewCart}
                    listCart={this.state.listCart}
                >{container}</Layout>;
    }
}

App.propTypes = {
    shoppingCart: PropTypes.array,
    products: PropTypes.array,
    addToCart: PropTypes.func,
    viewCart: PropTypes.func,
    listCart: PropTypes.bool,
    container: PropTypes.element
}
