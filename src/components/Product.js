import React from "react";
import { cartActions } from "../store/cart-slice";
import { useDispatch } from "react-redux";
import "./Product.css";


const Product = ({ name, id, imgURL, price }) => {
  const dispatch = useDispatch();
  function handleClick(event){
    dispatch(cartActions.addToCart({
      name,
      id,
      price
    }));
  }

  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>₹ {price}</p>
      <button onClick={handleClick}>Add to cart</button>
    </div>
  );
};

export default Product;
