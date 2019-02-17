#### Intro
Let's think about what areas of the page should change and which should not. Think about amazon.com. What parts of the page are always in view. Which parts change to show something else.

https://blackrockdigital.github.io/startbootstrap-shop-homepage/

### Setup
Fork, clone, install http-server or use live server

### Building React Components
 * Create a component folder in /public/js to hold component files
 * Organize this web page into appropriate components
   * ShoppingCart
   * Layout
   * ProductList
* Make sure to reference each component file in a script tag in index.html in the proper order
* Make sure to use type="text/babel"



### ShoppingCart
* This component's purpose is to show everything that is in the customer's shopping cart.
* Take a prop called cart which should be an array of product objects
* Map the cart array into ProductDetail components and show it on the page. 
* Code a button for Checkout

### Layout
* Cut all the JSX from App.js and put it into the Layout component.
* Use Layout in the App components and make sure everything still works the same.
* You will have to piggy back the props down.
* use props.children in the main content area where products are shown instead of showing products

### ProductList
* Take prop called products that should be an array of product objects
* Map the product array into ProductDetail components and show them on the page.
* This should replace doing the map in App.js


### App
* Maintain a piece of state to determine what should be currently show on the page, the list of products or the shopping cart.
* Create a method that allows this value of state to be changed and to re render things.
* Pass this method to the child component that allows the user to change the view, Header
* Use conditional rendering to decide to show ProductList or ShoppingCart as a child of Layout. Show the ProductList by default.

### Header
* Add an onClick to the Products and Items in Cart links
* Take a prop called changeView that is a function
* When the links are clicked, call changeView passing in whatever argument is needed to change the view
 






