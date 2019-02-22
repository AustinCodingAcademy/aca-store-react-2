function ShoppingCart(props){
  return props.shoppingCart.map((product,index) =>{
    return <ProductDetail key={index} product={product}/>
  })
}

ShoppingCart.propTypes = {
  shoppingCart: PropTypes.array.isRequired
}