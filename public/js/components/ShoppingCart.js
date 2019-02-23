function ShoppingCart(props){
    
    const shoppingCartDetails = props.shoppingCart.map((p,i)=>{
        return  <ProductDetail 
        addToCart={props.addItemToCart}
        key={i} 
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