import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const itemLists = useSelector((state) => state.cart.itemLists);
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        <li>
          {itemLists.map((item, index) => {
            return <CartItem key = {index} id={item.id} price={item.price} name={item.name} quantity={item.quantity} total={item.totalPrice} />
          })}
        </li>
      </ul>
    </div>
  );
};

export default CartItems;
