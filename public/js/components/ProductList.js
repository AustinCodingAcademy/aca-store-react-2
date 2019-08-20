function ProductList(props) {
    let productDetails = props.products.map((p,i)=>{
        return  <ProductDetail 
        addToCart={props.addToCart}
        key={i} 
        product={p} />
    });

    return (
        <div className="row">
            {productDetails}
        </div>
    )
}