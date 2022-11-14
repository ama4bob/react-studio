// TODO: create a component that displays a single bakery item
import React from "react";

function BakeryItem(cart) {
    const item = cart.item; 
    return(
        <div className= "BakeryItem">
            <img src = {item.image} width= "400px"></img>
            <div className = "Name">
            <b>{item.name}</b>
            </div>
            <div className = "Description">
            <i>{item.description}</i>
            </div>
            <div className = "price">
            <b>${item.price}</b>
            </div>
            <button className = "Button" onClick={() => cart.addToCart(cart.index)}>Add</button>
        </div>
    )
}

export default BakeryItem;

