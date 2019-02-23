function ShoppingCart(props){
    let productDetails;
    if(props.cart.length > 0){
        productDetails = props.cart.map((p,i)=>{
            return  <ProductDetail 
            key={i} 
            product={p} 
            addToCart={props.addItemToCart}
            />
        });
    }else{
        productDetails = <h2>No items in cart!</h2>
    }
    return(
        <div className="row">
            {productDetails}
        </div>
    );
}

ProductDetail.propTypes = {
    cart: PropTypes.array.isRequired
};

// Needs cart - line 3
// Needs addItemToCart() - line 7
// Sending to ProductDetail: addtoCart(), product
