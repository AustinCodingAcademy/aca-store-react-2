function ShoppingCart(props) {
    const shoppingCartItems = props.shoppingCart.map((p, i) => {
        return <ProductDetail
            addToCart={props.addItemToCart}
            key={i}
            product={p} />
    })
    return <div>{shoppingCartItems}</div>
}