
function ProductList(props){
    if (props.products.length === 0) {
        return <p>No products available</p>
    } else {
        return (props.products.map((p,i)=>{
            return  <ProductDetail 
            addToCart={props.addItemToCart}
            key={i} 
            product={p} />
        })
        )
    }
}

ProductList.propTypes = {
    addItemToCart: PropTypes.func
}