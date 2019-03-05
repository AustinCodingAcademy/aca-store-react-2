function ShoppingCart (props) {
    const shoppingCartDetails = props.shoppingCart.map((p,i) => {
        return <ProductDetail
            key={i}
            product={p}
            productIndex={i}
            whatToShow={props.whatToShow}
            removeFromCart={props.removeFromCart}
        />
    });
    
    return(
        <div>
            {shoppingCartDetails}
        </div>
    )
}

ShoppingCart.propTypes = {
    shoppingCart: PropTypes.array.isRequired
};