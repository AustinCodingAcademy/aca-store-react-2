function ShoppingCart(props){

    const productDetails = props.cart.map((p,i)=>{
        return  <ProductDetail 
        key={i} 
        product={p} 
        addToCart={props.addItemToCart}
        />
    });
    return(
        <div className="row">
            {productDetails}
        </div>
    );
}