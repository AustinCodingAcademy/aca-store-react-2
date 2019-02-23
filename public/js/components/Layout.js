function Layout(props) {

    let content = null;
    if (props.displayedState == 0) {
        content = <ProductList products={props.products}
            addToCart={props.addItemToCart}
        />
    } else if (props.displayedState == 1) {
        content = <ShoppingCart shoppingCart={props.shoppingCart} />
    }
    console.log(content);
    return (<div className="App">
        <Header displayOtherState={props.displayOtherState} cart={props.shoppingCart} />
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
                    <div className="row">
                        {content}
                    </div>
                </div>
            </div>
        </div>
        <div className="container">

            <hr />
            <Footer />
        </div>
    </div>
    );
}