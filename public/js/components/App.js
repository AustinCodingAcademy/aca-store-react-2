class App extends React.Component{
   state={
       shoppingCart:[],
       products:[
           {name:"Hand Lotion", price:"$10.50"},
           {name:"Lip Scrub", price:"$1.50"},
           {name:"Body Scrub", price:"$18.00"}
    ]
   }
   addItemToCart = (product)=> {
    this.setState(()=>{
        this.state.shoppingCart.push(product);
        return {shoppingCart:this.state.shoppingCart}
    })
   }
   render(){
            return (  
            <div className="App">
            <Layout cart={this.state.shoppingCart} products={this.state.products} addToCart={this.addItemToCart}/>
            </div>
        );
   }
}