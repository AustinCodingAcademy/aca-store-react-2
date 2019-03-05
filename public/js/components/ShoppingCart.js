function ShoppingCart (props) {
    const shoppingCartDetails = props.shoppingCart.map((p,i) => {
        return <ProductDetail
            key={i}
            product={p}
            whatToShow={props.whatToShow}
        />
    });
    
    return(
        <div>
            {shoppingCartDetails}
        </div>
    )
}