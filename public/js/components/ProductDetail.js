/*
{
    "id": 1,
    "name": "Body Luxuries Sweet Lavender Hand Sanitizer",
    "description": "Cleans your hands",
    "reviews": 46,
    "rating": 2,
    "imgUrl": "http://dummyimage.com/136x167.bmp/cc0000/ffffff",
    "price": "$95.11"
  }
  */
 function ProductDetail (props){

    let star = [];
    for(let i = 0; i < props.product.rating; i ++){
      star.push(<span key={i} className="glyphicon glyphicon-star"></span>);
    }
    let emptystars = []
    emptystars.push(<span class="glyphicon glyphicon-star-empty"></span>)

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
    </div>
</div>);
}