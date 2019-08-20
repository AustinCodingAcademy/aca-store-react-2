function Layout(props) {
    let display = props.listCart;
    let container = null;
    display ? container = <ProductList products={props.products} addToCart={props.addToCart}/>
            : container = <ShoppingCart shoppingCart={props.shoppingCart} addToCart={props.addToCart}/>

    return (
        <div className="App">
            <Header 
                cart={props.shoppingCart}
                viewCart={props.viewCart}
            />
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
                    {/*comments */}
                    <div className="col-md-9">
                        <Carousel />
                        {container}
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

Layout.propTypes = {
    shoppingCart: PropTypes.array,
    products: PropTypes.array,
    container: PropTypes.node
}
