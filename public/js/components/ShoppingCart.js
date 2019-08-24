
/*function ShoppingCart(props){
    const prodDetails = props.products.map((p,i)=>{
        return  <ProductDetail 
        key={i} 
        product={p} />
    });
return(
    <div>
        {prodDetails}
    </div>
)
}*/

function ShoppingCart(props){
    const cartItems = props.cart.map((item,i)=>{
        return  <ProductDetail 
        key={i} 
        product={item} />
    });
return(
    <div>
        {cartItems}
    </div>
)
}