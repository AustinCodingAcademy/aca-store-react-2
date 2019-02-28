export default function Layout(props) {

    let toDisplay;
    if (props.toDisplay == 0) {
        toDisplay = <ProductList products = {props.products} addItemToCart = {props.addItemToCart}/>
    }
    else {
        toDisplay = <ShoppingCart products = {props.shoppingCart}/>
    }

    return (
    <div className="App">
        <Header cart = {props.shoppingCart} changeWhatToDisplay = {props.changeWhatToDisplay}/>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <p className="lead">Shop Name</p>
                <   div className="list-group">
                        <a href="#" className="list-group-item">Category 1</a>
                        <a href="#" className="list-group-item">Category 2</a>
                        <a href="#" className="list-group-item">Category 3</a>
                    </div>
                </div>
                <div className="col-md-9">
                    <Carousel />
                    <div className="row">
                        {props.productDetails}
                    </div>
                </div>
                {toDisplay}
            </div>
        </div>
        <div className="container">
            <hr/>
            <Footer />
        </div>
    </div>
    );
}