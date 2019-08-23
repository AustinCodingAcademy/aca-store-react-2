
function Layout(props){
    return(
    <div>
        <Header changeView={props.changeView} cart={props.cart}/>
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
                    <ProductList products={props.products} addToCart={props.addToCart}/>
                    </div>
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