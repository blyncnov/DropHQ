import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import Address from "../util/address";
import CartSummary from "./Summary";

const Cart = () => {
  const [steps, setSteps] = useState(1);
  const dispatch = useDispatch();

  const cartItem = useSelector((state) => state.cartReducer.cart);

  const TotalCart = cartItem.reduce((cartTotal, cartItem) => {
    const { price, QTY } = cartItem;
    return (cartTotal += QTY * price);
  }, 0);

  console.log(steps);

  const OrderHandler = () => {
    if (steps >= 3) {
      setSteps(3);
    } else {
      setSteps((steps) => steps + 1);
    }
  };

  const GoBackHandler = () => {
    if (steps <= 1) {
      setSteps(1);
    } else {
      setSteps((steps) => steps - 1);
    }
  };

  const ClearCartHandler = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <div className="Cart__Make__Order__Container">
      <div className="Layout__constraint">
        <div className="Cart__container__Grid__Container">
          {steps === 1 && (
            <>
              <h3> Your Order</h3>
              <br />
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
            </>
          )}

          {steps === 2 && (
            <>
              <Address />
            </>
          )}

          {steps === 3 && (
            <div className="Cart__Body">
              <h3> CHECKOUT</h3>
              <br />
              {cartItem.map((item, index) => {
                return (
                  <div className="Cart__Section__Container" key={index}>
                    <div className="Cart__Section">
                      <h4> {item.name} </h4>
                      <h4> {item.QTY} </h4>
                      <p> ₦{item.price} </p>
                    </div>
                    <h6> {item.description} </h6>
                  </div>
                );
              })}

              <CartSummary cartItem={cartItem} TotalCart={TotalCart} />
            </div>
          )}
        </div>

        <div className="group__page__button">
          {steps === 1 ? (
            <>
              {cartItem.length > 0 ? (
                <>
                  <button onClick={ClearCartHandler} className="prev-btn">
                    Clear Cart
                  </button>
                  <button onClick={OrderHandler}>Next</button>
                </>
              ) : null}
            </>
          ) : null}
          {steps === 2 && (
            <>
              <button onClick={GoBackHandler} className="prev-btn">
                Back
              </button>
              <button onClick={OrderHandler}>Next</button>
            </>
          )}
          {steps === 3 && (
            <>
              <button onClick={GoBackHandler} className="prev-btn">
                Back
              </button>
            </>
          )}
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Cart;
