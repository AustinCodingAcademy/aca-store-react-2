function ShoppingCart(props) {
    let cartItem = props.shoppingCart.map((p, i) => {
        return (
            <ProductDetail 
                key={i}
                product={p}
                addToCart={props.addToCart}
            />
        )
    });
    return(
        <div className="row">
            {cartItem}
        </div>
    )
}