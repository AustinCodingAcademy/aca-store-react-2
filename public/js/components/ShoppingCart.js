function ShoppingCart(props){
    const productDetails = props.cart.map((p,i)=>{
        return <ProductDetail 
        addToCart={props.addToCart}
        key={i} 
        product={p} />
    })
    return(
        <div className="row">
            {productDetails}
            <button>Checkout</button>
        </div>
    )
}

ShoppingCart.propTypes = {
    cart: PropTypes.array.isRequired,
    addToCart: PropTypes.func.isRequired} 