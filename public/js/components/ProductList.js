function ProductList(props) {
    let productDetails = [];
    if(props.products.length) {
        productDetails = props.products.map((p,i)=>{
            return  <ProductDetail 
            addToCart={props.addToCart}
            key={i} 
            product={p} />
        });
    } else {
        productDetails = [
            <h4 className="text-center" key={0}>No products available</h4>
        ]
    }

    return (
        <div className="row">
            {productDetails}
        </div>
    )
}

ProductList.propTypes = {
    addToCart: PropTypes.func,
    productDetails: PropTypes.node,
    products: PropTypes.array,
    product: PropTypes.object
}
