import React from "react";

import { useDispatch, useSelector } from "react-redux";
import Address from "../util/address";

const Cart = () => {
  const dispatch = useDispatch();

  const cartItem = useSelector((state) => state.cartReducer.cart);

  const TotalCart = cartItem.reduce((acc, curr) => {
    return curr.QTY * curr.price;
  }, 0);

  console.log(TotalCart, "Total");

  return (
    <div>
      <div className="Layout__constraint">
        <div className="Cart__container__Grid__Container">
          <div className="Cart__Body">
            <h4> Cart ({cartItem.length})</h4>
            <br />
            {cartItem.length <= 0 ? (
              "Your cart is empty!"
            ) : (
              <>
                {cartItem.map((item, index) => {
                  return (
                    <div className="Cart__Section__Container" key={index}>
                      <div className="Cart__Section">
                        {" "}
                        <h4> {item.name} </h4>
                        <h4> {item.QTY} </h4>
                        <p> ₦{item.price} </p>
                      </div>
                      <h6> {item.description} </h6>
                    </div>
                  );
                })}
              </>
            )}
          </div>

          <div className="Cart__Body">
            <h4> CART SUMMARY ({cartItem.length})</h4>
            <div className="Cart__Summary">
              <div className="Cart__Summary__Grid">
                <h4> Sub Total</h4>
                <p> ₦{TotalCart}</p>
              </div>
              <div className="Cart__Summary__Grid">
                <h4> Delivery Fee</h4>
                <p> ₦300</p>
              </div>
              <div className="Cart__Summary__Grid">
                <h4> Charges</h4>
                <p> ₦50</p>
              </div>
              <div className="Cart__Summary__Grid">
                <h4> Pack Fee</h4>
                <p> ₦150</p>
              </div>
              <div className="Cart__Summary__Grid">
                <h4> Grand Total</h4>
                <p> ₦{TotalCart + 300 + 50 + 150}</p>
              </div>
              <button className="Cart__payment">Proceed to payment</button>
              <h6>Secure Checkout shipping is always safe and secure.</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
