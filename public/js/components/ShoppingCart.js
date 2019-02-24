
function ShoppingCart(props){
    return (
        <div>
            {props.shoppingCart.map((p,i)=>{
                return  <ProductDetail
                key={i} 
                product={p} />
            })}
            <button>Checkout</button>
        </div>
    )
}

ShoppingCart.propTypes = {
    shoppingCart: PropTypes.array.isRequired
}