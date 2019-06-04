function Layout(props){
    return(
        <div>
            <Header cart={props.state.shoppingCart}/>
        <div className="container">
            <div className="row">
                <Categories />
                <div className="col-md-9">
                    <Carousel />
                    <div className="row">
                        {props.children}
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