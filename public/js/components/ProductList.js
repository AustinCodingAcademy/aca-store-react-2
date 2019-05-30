function ProductList(props) {
    let productList = []
    if (props.products === undefined) {
        productList = <div>No products available.</div>
    } else {
        
        productList = props.products.map((product,i)=>{
            return  <ProductDetail 
                    addToCart={props.addItemToCart}
                    key={i} 
                    product={product} />
        });
    }
    return (
        productList
    )
}
