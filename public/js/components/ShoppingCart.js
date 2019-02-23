function ShoppingCart(props){
    
    const shoppingCartDetails = props.shoppingCart.map((p,i)=>{
        return  <ProductDetail 
        whatToShow = {props.whatToShow}
        removeFromCart={props.removeFromCart}
        key={i} 
        productIndex={i}
        product={p} />
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