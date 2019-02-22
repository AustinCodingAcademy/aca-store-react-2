function ProductList(props){
  const productDetails = props.products.map((p,i)=>{
    return  <ProductDetail 
    addToCart={props.addItemToCart}
    key={i} 
    product={p}>
    
    </ProductDetail>
  });
  return productDetails;
}