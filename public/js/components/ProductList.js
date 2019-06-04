
function ProductList(props){
    const productDetails = props.products.map((p,i)=>{
        return  <ProductDetail 
        addToCart={props.products.addItemToCart}
        key={i} 
        product={p} />
    });
    return(
        productDetails
    )
}