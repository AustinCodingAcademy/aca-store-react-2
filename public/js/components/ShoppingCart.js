function ShoppingCart(props) {
    const cart = props.cart.map((p,i)=>{
        return <ProductDetail 
            addToCart={props.addItemToCart}
            key={i} 
            product={p} 
            />
    })
}