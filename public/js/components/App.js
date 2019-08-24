class App extends React.Component{
    state={
    shoppingCart:[],
    products: [],
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

 // * Add the componenDidMount lifecycle method to App
 // * In the componentDidMOunt method make a fetch call to https://acastore.herokuapp.com/products
 // * When fetch is done, use setState to load the data into the products array.
componentDidMount() {
    fetch("https://acastore.herokuapp.com/products")
    .then (response => response.json())
    .then (data => this.setState({products:data}));
}

render(){
 let content = null;
    if (this.state.homePage === 0){
     content = <ProductList
                products={this.state.products}
                addToCart={this.addItemToCart}
             />
    } else if(this.state.homePage === 1){
        if (this.state.shoppingCart.length === 0){
            content = <h1>No products available.</h1>
        } else {
         content = <ShoppingCart
                    products={this.state.products}
                    cart={this.state.shoppingCart}
                />
        }
    }
     return (
         <Layout
             cart={this.state.shoppingCart}
             products={this.state.products}
             addItemToCart={this.addItemToCart}
             changeHomePage={this.changeHomePage}
         >
     {content}
    </Layout>
     )
}
}

App.propTypes = {
 products: PropTypes.array.isRequired}