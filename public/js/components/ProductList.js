function ProductList(props){
  const productDetails = props.products.map((p,i)=>{
    return  <ProductDetail 
    addItemToCart={props.addItemToCart}
    key={i} 
    product={p}
    >
    <button onClick={()=>
      {
          props.addItemToCart(p);
      }}>Add To Cart
    </button>
    </ProductDetail>
  });
  return productDetails;
}