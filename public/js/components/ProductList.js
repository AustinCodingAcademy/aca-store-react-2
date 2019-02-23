function ProductList(props){
    let productDetails;
    if(props.products.length > 0){
        productDetails = props.products.map((p,i)=>{
            return  <ProductDetail 
            addToCart={props.addItemToCart}
            key={i} 
            product={p} 
            />
        });
    }else{
        productDetails = <h2>No products available</h2>
    }
    return(
        <div className="row">
            {productDetails}
        </div>
    )
}

ProductList.propTypes = {
    products: PropTypes.array.isRequired
};

// Needs products 
// Needs addItemtoCart() 
// Sending to ProductDetail: addToCart(), product