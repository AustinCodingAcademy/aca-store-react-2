class App extends React.Component{
   state={
       shoppingCart:[]
   }
   addItemToCart = (product)=> {
    this.setState(()=>{
        this.state.shoppingCart.push(product);
        return {shoppingCart:this.state.shoppingCart}
    })
   }
   render(){
            return (  <div className="App">
            <Header cart={this.state.shoppingCart}/>
        <div className="container">
            <div className="row">
                <Categories />
                <div className="col-md-9">
                    <Carousel />
                    <div className="row">
                        <ProductList products={this.state.products}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">

            <hr/>
            <Footer />
        </div>
            </div>
        );
   }
}