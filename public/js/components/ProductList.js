// * App should not be responsible for mapping products into an array of ProductDetail components
// * ProductList should be responsible for this now.
// * Move the code from App into this component
// * Take prop called products that should be an array of product objects
// * Map the product array into ProductDetail components and show them on the page.
// * Use this component where needed to show the products


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