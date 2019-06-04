function ShoppingCart(props) {
    const cartItems = props.cart.map((p,i)=>{
        return  <ProductDetail 
        addToCart={props.addItemToCart}
        key={i} 
        product={p} />
    });
    return (
        <div>
            {cartItems}
            <button>Checkout</button>
        </div>

    )
} 