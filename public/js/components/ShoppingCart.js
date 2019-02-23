ShoppingCart.propTypes = {
  shoppingCart: PropTypes.array.isRequired
}

function ShoppingCart(props){
  return props.shoppingCart.map((product,index) =>{
    return <ProductDetail 
    key={index} 
    product={product}
    >
    <button onClick={()=>
      {
        props.removeItemFromCart(index);
      }}>Remove from cart
    </button>
    </ProductDetail>
  })
}