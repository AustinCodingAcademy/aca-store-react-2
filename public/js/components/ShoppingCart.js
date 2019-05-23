function ShoppingCart(props) {
    const cartList = props.cart.map((p,i)=>{
        return  <ProductDetail 
        addToCart={props.addItemToCart}
        key={i} 
        product={p} />
    });
    return (
        <div>
        {cartList}
        <button>Checkout</button>
        </div>

    )
}