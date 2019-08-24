class App extends React.Component{
   state={
       shoppingCart:[],
       products:[
           {name:"Body Wash", description:"A nice product. Try it.", price:"$10.00"},
           {name:"Lip Scrub", description:"Good product. Try it.", price:"$8.40"},
           {name:"Puppy Shampoo", description:"Its toothpast-yadda", price:"$11.90"},
           {name:"Mint Toothpast",description:"Sweet product. Try it.", price:"$9.90"},
           {name:"Hand Lotion",description:"A so-so product- it works.", price:"$12.50"}
    ],
    whatToShow: 1
   }

   /*componentDidMount(){
    fetch("https://acastore.herokuapp.com/products")
      .then((res)=>res.json())
      .then((products)=> {
        this.setState({products})
      })
      .catch(err=> console.log("Error Occured:" + (err)))
    }*/

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
