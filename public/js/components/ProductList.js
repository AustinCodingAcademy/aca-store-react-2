function ProductList(props){
    
    const productDetails = props.products.map((p,i)=>{
        return  <ProductDetail 
        addToCart={props.addItemToCart}
        key={i} 
        product={p} 
        />

    });
    return(
        <div className="row">
            {productDetails}
        </div>
    )
}

// Needs products - line 3
// Needs addItemtoCart() - line 5
// Sending to ProductDetail: addToCart(), product