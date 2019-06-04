function ProductList(props){
    const productDetails = this.props.products.map((p,i)=>{
        return  <ProductDetail 
        addToCart={this.addItemToCart}
        key={i} 
        product={p} />
    });
}