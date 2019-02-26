class App extends React.Component{
   state={
       shoppingCart:[]
   }
   addItemToCart = (product)=> {
    this.setState(()=>{
        this.state.shoppingCart.push(product);
        return {shoppingCart:this.state.shoppingCart}
    })
   }
   render() {
    return <Layout
            shoppingCart={this.state.shoppingCart}
        >
            {content}
        </Layout>
   }
}