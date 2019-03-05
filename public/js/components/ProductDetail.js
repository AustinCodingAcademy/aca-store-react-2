 function ProductDetail (props){

    let star = [];
    for(let i = 0; i < props.product.rating; i ++){
      star.push(<span key={i} className="glyphicon glyphicon-star"></span>);
    }
    let emptystars = []
    emptystars.push(<span class="glyphicon glyphicon-star-empty"></span>)

    let buttonContent = null;
    if(props.whatToShow == 0){
        buttonContent = <button onClick = {()=>{
            props.addToCart(props.product);
        }}>Add To Cart</button>
    } else if (props.whatToShow == 1){
        buttonContent = <button onClick = {()=>{
            props.removeFromCart(props.productIndex);
        }}>Remove from Cart</button>
    };

    return ( <div className="col-sm-4 col-lg-4 col-md-4">
    <div className="thumbnail">
        <img src="http://placehold.it/320x150" alt=""/>
        <div className="caption">
            <h4 className="pull-right">
            {props.product.price}</h4>
            <h4><a href="#">{props.product.name}</a>
            </h4>
            <p>{props.product.description}</p>
        </div>
        <div className="ratings">
            <p className="pull-right">
            {props.product.reviews} reviews</p>
            <p>
                
                {star}
            </p>
        </div>
        <button onClick={()=>{
            //what do we code here
            props.addToCart(props.product);
        }}>Add To Cart</button>
        {buttonContent}
    </div>
</div>);
}