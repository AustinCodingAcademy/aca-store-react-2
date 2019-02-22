#### Intro
Let's think about what areas of the page should change and which should not. Think about amazon.com. What parts of the page are always in view. Which parts change to show something else.

# Part 1

### 1. Setup
Fork, clone, install http-server or use live server

### 2. Building React Components
 * Add some more components to /js/components to help better organize our code.
   * ShoppingCart
   * Layout
   * ProductList
* Make function components for now
* Make sure to reference each component file in a script tag in index.html in the proper order
* Make sure to use type="text/babel"

### 3. Layout & App
* Cut out all the JSX from App.js and put it into the Layout component as the returned JSX.
* Use the Layout Component in App so that it can contain children, `<Layout></Layout>`
* You will have to piggy back the props down and change references to `this`.
* Make sure everything still works the same.

### 4. ProductList
* App should not be responsible for mapping products into an array of ProductDetail components
* ProductList should be responsible for this now.
* Move the code from App into this component
* Take prop called products that should be an array of product objects
* Map the product array into ProductDetail components and show them on the page.
* Use this component where needed to show the products

### 5. ShoppingCart
* This component's purpose is to show everything that is in the customer's shopping cart.
* Take a prop called cart which should be an array of product objects
* Map the cart array into ProductDetail components and return this array in JSX
* Code a button for Checkout

### 6. App
* Maintain a piece of state to determine what should be currently show on the page, the list of products or the shopping cart.
* Create a method that allows this value of state to be changed and to re render things.
* Pass this method to the child component that allows the user to change the view, Header
* Use conditional rendering to decide to show ProductList or ShoppingCart as a child of Layout. Show the ProductList by default.

### 7. Header
* Add an onClick to the Products and Items in Cart links
* Take a prop called changeView that is a function
* When the links are clicked, call changeView passing in whatever argument is needed to change the view



### 8. PropTypes
* Add the proptypes library to your web app. Include a script tag in the index.html page
* <script src="https://cdnjs.cloudflare.com/ajax/libs/prop-types/15.7.2/prop-types.min.js"></script>
* Go back and use prop types in all your components
* We need to be clear on what props each component requires so that we can be sure to provide them
* Make note of where you are using each component, are you giving it the props that it needs?


### 9. Layout
* Use props.children in the main content area where products are shown instead of showing products

### Make sure
* Class components are using `this` for props and state
* Function components are not using `this`

### Further Thinking
* What is wrong with the ShoppingCart?
* How can this issue be resolved?

# Part 2. 
### ProductList
* Add some conditional rendering to this component:
* If the products array is empty, render a message that says "No products available".
* If the products array is not empty, render the ProductDetails as normal.

### componenDidMount
* Make the App component have a state key for products which should default to an empty array
* Pass this state to the props of the child components Layout -> ProductList
* Add the componenDidMount lifecycle method to App
* In the componentDidMOunt method make a fetch call to https://acastore.herokuapp.com/products
* When fetch is done, use setState to load the data into the products array.





