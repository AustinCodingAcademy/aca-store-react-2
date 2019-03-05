function ProductList (props) {
    
    const productDetails = props.products.map((p,i)=>{
        return  <ProductDetail 
        whatToShow = {props.whatToShow}
        addToCart={props.addItemToCart}
        key={i} 
        product={p} />
    });

    return(
        <div>
            {productDetails}
        </div>
    )
}