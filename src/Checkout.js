import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue(); //dispatch can be omitted here since no dispatch performed here.
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://i.pinimg.com/originals/18/33/cc/1833cc955726fbb5faa48c2e577bfcf0.png"
        />
        <div className="checkout__title">
            <h3>Hello, {user?.email}</h3>
            <h2>Your Cart</h2>
            {basket.map(item => (
              <CheckoutProduct  //checkoutproduct being called here.
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}   
              />
            ))}
            {/*Basket item*/}
            {/*Basket item*/}
            {/*Basket item*/}
            {/*Basket item*/}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
