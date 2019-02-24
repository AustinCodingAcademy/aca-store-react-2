class App extends React.Component{
   state={
       shoppingCart:[],
       isOn: true,
       products: []
   }

   addItemToCart = (product)=> {
        this.setState(()=>{
            this.state.shoppingCart.push(product);
            return {shoppingCart:this.state.shoppingCart}
        })
    }

    changeView = (val) => {
        this.setState({isOn: val})
   }

   componentDidMount = () => {
    fetch('https://acastore.herokuapp.com/products')
        .then(res => res.json())
        .then(json => {
            this.setState( () => {
                json.forEach(obj => {
                    this.state.products.push(obj)
                });
                return {products: this.state.products}
            })
        });
   }

   render() {
       let list = null;
       let carousel = null;

       if (this.state.isOn) {
           list = <ProductList products={this.state.products} addItemToCart={this.addItemToCart} />
           carousel = <Carousel />
       } else {
           list = <ShoppingCart shoppingCart={this.state.shoppingCart} />
       }

       return (
           <Layout
               shoppingCart={this.state.shoppingCart} changeView={this.changeView}>
               {carousel}
               {list}
           </Layout>
       )
    }
}

App.propTypes = {
    products: PropTypes.array.isRequired
}