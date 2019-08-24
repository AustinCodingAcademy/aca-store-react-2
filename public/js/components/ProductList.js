function ProductList(props){
    const productDetails = props.products.map((p,i)=>{
        return <ProductDetail 
        addToCart={props.addToCart}
        key={i} 
        product={p} />
    });
    return(
        <div className="row">
            {productDetails}
        </div>)
}

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
    addToCart: PropTypes.func.isRequired
}  