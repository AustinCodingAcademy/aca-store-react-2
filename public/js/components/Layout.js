function Layout(props){
    let content = null;
    if(props.whatToShow === 1){
        content = <ShoppingCart cart={props.shoppingCart} addItemToCart={props.addItemToCart}></ShoppingCart>
    }else if(props.whatToShow === 0){
        content = <ProductList products={props.products} addItemToCart={props.addItemToCart}/>
    }
    return(
        <div className="App">
            <Header cart={props.shoppingCart} showCart={props.showCart} showProducts={props.showProducts}/>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <p className="lead">Shop Name</p>
                    <div className="list-group">
                        <a href="#" className="list-group-item">Category 1</a>
                        <a href="#" className="list-group-item">Category 2</a>
                        <a href="#" className="list-group-item">Category 3</a>
                    </div>
                </div>
                <div className="col-md-9">
                    <Carousel />
                    {content}
                </div>
            </div>
        </div>
        <div className="container">

            <hr/>
            <Footer />
        </div>
            </div>
    )
}