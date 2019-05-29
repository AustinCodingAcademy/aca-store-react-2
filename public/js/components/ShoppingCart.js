const ShoppingCart = (props) => {
    let shoppingCart = props.shoppingCart.map((p, i) => {
        return <ProductDetail key={i} product={p} />
    })

    return(
        <div>
            {shoppingCart}
            <button>Checkout</button>
        </div>
    )
}
