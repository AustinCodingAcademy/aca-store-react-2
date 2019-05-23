function ProductList(props) {
    const productList = props.products.map((p,i)=>{
        return  <ProductDetail 
        addToCart={props.addItemToCart}
        key={i} 
        product={p} />
    });
    return (
        productList
    )
}