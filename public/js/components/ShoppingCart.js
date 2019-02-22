function ShoppingCart(props){
  return props.shoppingCart.map((product,index) =>{
    return <ProductDetail key={index} product={product}/>
  })
}