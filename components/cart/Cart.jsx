import React from "react";

import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();

  const cartItem = useSelector((state) => state.cartReducer.cart);

  console.log(cartItem);

  return (
    <>
      <div className="Layout__constraint">
        <h3>My Cart</h3>
        {cartItem.map((item, index) => {
          return (
            <div key={index}>
              <h4> {item.name} </h4>
              <p> {item.price} </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
