class App extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            shoppingCart:[],
            products: props.products,
            listCart: true
        }
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
       return <Layout 
                shoppingCart={this.state.shoppingCart}
                products={this.state.products}
                addToCart={this.addToCart}
                viewCart={this.viewCart}
                listCart={this.state.listCart}
            />;
   }
}

App.propTypes = {
    shoppingCart: PropTypes.array,
    products: PropTypes.array,
    addToCart: PropTypes.func,
    viewCart: PropTypes.func,
    listCart: PropTypes.bool
}
