const ProductList = (props) => {
    const productDetails = props.products.map((p,i)=>{
        return  <ProductDetail 
        addToCart={props.addItemToCart}
        key={i} 
        product={p} />
    });

    return(
        <div>{productDetails}</div>
    )
}