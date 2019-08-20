// * Add an onClick to the Products and Items in Cart links
// * Take a prop called changeView that is a function
// * When the links are clicked, call changeView passing in whatever argument is needed to change the view

function Header(props){
    return (
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
          
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
            </div>
          
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    <li>
                        <a href="#" onClick={()=>props.changeHomePage(0)}>Products</a>
                    </li>
                    <li >
                        <a href="#" onClick={()=>props.changeHomePage(1)}>Items In Cart ({props.cart.length})</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
}

Header.propTypes = {
    changeHomePage: PropTypes.func.isRequired,
    cart: PropTypes.array.isRequired}

