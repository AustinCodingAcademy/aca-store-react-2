class App extends React.Component{
   state={
       shoppingCart:[],
       products:[
           {name:"Hand Lotion", price:"$10.50"},
           {name:"Lip Scrub", price:"$4.50"},
           {name:"Body Scrub", price:"$12.00"},
           {name:"Mint Toothpast", price:"$3.00"},
           {name:"Puppy Shampoo", price:"$9.00"},
           {name:"Room Spray", price:"$11.90"},
    ],
    whatToShow: 1
   }
   addItemToCart = (product)=> {
    this.setState(()=>{
        this.state.shoppingCart.push(product);
        return {shoppingCart:this.state.shoppingCart}
    })
    console.log(this.state.shoppingCart)
   }
   changeView =(num)=>{
       this.setState({
           whatToShow: num
       })
       console.log(num)
   }
   render(){
       let content = null;

       if(this.state.whatToShow === 1){
           content = <Layout cart={this.state.shoppingCart} products={this.state.products} addToCart={this.addItemToCart} changeView={this.changeView}/>
       }
       else {
           content = <ShoppingCart cart={this.state.shoppingCart} products={this.state.products} />
       }
            return (  
            <div className="App">
                <button onClick={(e)=>{e.preventDefault();
                    this.setState({
                    whatToShow: 1
                });
                }}>Home</button>
                <div>{content}</div> 
            </div>
        );
   }
}