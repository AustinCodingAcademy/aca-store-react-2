// * This component's purpose is to show everything that is in the customer's shopping cart.
// * Take a prop called cart which should be an array of product objects
// * Map the cart array into ProductDetail components and return this array in JSX
// * Code a button for Checkout


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