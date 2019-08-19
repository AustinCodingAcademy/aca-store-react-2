function Layout(props) {
  return (
    <div className="App">
      <Header cart={props.shoppingCart} />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <p className="lead">Shop Name</p>
            <div className="list-group">
              <a href="#" className="list-group-item">
                Category 1
              </a>
              <a href="#" className="list-group-item">
                Category 2
              </a>
              <a href="#" className="list-group-item">
                Category 3
              </a>
            </div>
          </div>
          {/*comments */}
          <div className="col-md-9">
            <Carousel />
            {props.children}
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
ProductDetail.propTypes = {
  cart: PropTypes.array.isRequired,
  changeView: PropeTypes.number.isRequired
};
