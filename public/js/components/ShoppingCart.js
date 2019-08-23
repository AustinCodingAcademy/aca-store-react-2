
function ShoppingCart(props){
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
}