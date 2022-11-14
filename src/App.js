import "./css/App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem  from './components/BakeryItem';
import CartItems  from './components/CartItems';


/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [newCart, setCart] = useState(Array(bakeryData.length).fill(0));

  const addCart = (item) => {
    const cart = [...newCart]
    cart[item]++
    setCart(cart)
    console.log("hi", newCart)
  }

  return (
    <div className="App">
      <div className = "left">
      <h1>Bob's Bakery</h1> 
      <div className = "Items">
      <div className ="child_item">

        {bakeryData.map((item, index) =>  

          <BakeryItem 
          item = {item}
          index = {index}
          addToCart = {addCart}
            /> 
        )}
                    </div>
        </div>
      </div>
      <div className = "right">
        <h2>Cart</h2>
        <div className = "cart_price">
          <b>Total Price: </b>
        </div>
        <div className = "cart_items">
        {newCart.map((count, index) => count? <CartItems cartItem = {bakeryData[index]} count = {count}/> :<></>)}
        $
        {(newCart.reduce((a,b,index) => {
          return a + b*bakeryData[index].price},0)).toFixed(2)}        
          </div>
      </div>
      </div>

  );
}

export default App;
