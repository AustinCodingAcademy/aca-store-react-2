class App extends React.Component{
    state={
        shoppingCart:[],
        whatToShow: 0,
    }
    addItemToCart = (product)=> {
     this.setState(()=>{
         this.state.shoppingCart.push(product);
         return {shoppingCart:this.state.shoppingCart}
     })
    }
    whatWeSee = (changedState) => {
        this.setState(()=>{
            return {whatToShow:changedState}
        })
        console.log(changedState)
    }
   render(){
       return <Layout addItemToCart={this.addItemToCart}
        shoppingCart = {this.state.shoppingCart}
        products = {this.props.products}
        whatWeSee = {this.whatWeSee}
        whatToShow = {this.state.whatToShow}
        />
   }
}