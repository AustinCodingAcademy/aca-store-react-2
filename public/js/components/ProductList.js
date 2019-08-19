function ProductList(props) {
  let productDetails = props.products.map((product, i) => {
    return (
      <ProductDetail
        addToCart={props.addItemToCart}
        key={i}
        product={product}
      />
    );
  });
  return <div className="row">{productDetails}</div>;
}
ProductList.propTypes = {
  products: PropTypes.array.isRequired
};
