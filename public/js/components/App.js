class App extends React.Component{
   
   
    state={
       shoppingCart: [],
       sectionTodisplay: 0
   }
   
   
   addItemToCart = (product)=> {
    this.setState(()=>{
        this.state.shoppingCart.push(product);
        console.log("Added item to cart");
        return {shoppingCart: this.state.shoppingCart}
    })
   }

   changeToDisplay = (toDisplayValue) => {
       this.setState(() => {
            //this.state.sectionTodisplay = toDisplayValue;
            console.log("About to display: " + toDisplayValue);
            return {sectionTodisplay: toDisplayValue}
       });
   }

   render(){

        return (
            <Layout             
                shoppingCart = {this.state.shoppingCart}
                addItemToCart = {this.addItemToCart}
                products = {this.props.products}
                changeWhatToDisplay = {this.changeToDisplay}
                toDisplay = {this.state.sectionTodisplay}>
                
            </Layout> 
        );
   }
}