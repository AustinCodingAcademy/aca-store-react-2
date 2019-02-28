export default function ShoppingCart(props) {

    const productsInCart = props.products.map((p,i)=>{
        return  <ProductDetail 
        //addToCart={props.addItemToCart}
        key={i} 
        product={p} />
    });

    return (
        <div>
            {productsInCart}
        </div>
    );

}