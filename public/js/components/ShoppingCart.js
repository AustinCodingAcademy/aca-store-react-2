function ShoppingCarts(props) {
  const shoppingCartItems = props.cart.map((product, i) => {
    return (
      <ProductDetail
        addToCart={props.addItemToCart}
        key={i}
        product={product}
      />
    );
  });
  return <div className="row">{productDetails}</div>
  <button>Checkout</button>;
}
ProductDetail.propTypes = {
    cart: PropTypes.array.isRequired
};
