import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import Address from "../util/address";
import CartSummary from "./Summary";

import { ImCancelCircle } from "react-icons/im";

const Cart = () => {
  const [steps, setSteps] = useState(1);
  const dispatch = useDispatch();

  const cartItem = useSelector((state) => state.cartReducer.cart);

  const TotalCart = cartItem.reduce((cartTotal, cartItem) => {
    const { price, QTY } = cartItem;
    return (cartTotal += QTY * price);
  }, 0);

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

  const removeItemFromCart = (id) => {
    dispatch({ type: "REMOVE__ITEM", payload: id });
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
              <div>
                <h3> Cart ({cartItem.length})</h3>
              </div>
              <div className="Checkout__Container">
                <br />
                <div className="Cart__Body">
                  {cartItem.length <= 0 ? (
                    "Your cart is empty!"
                  ) : (
                    <>
                      {cartItem.map((item, index) => {
                        return (
                          <div className="Cart__Section__Container" key={index}>
                            <div className="cancel__btn">
                              <button
                                onClick={() => removeItemFromCart(item.id)}
                              >
                                <h2>
                                  <ImCancelCircle />
                                </h2>
                              </button>
                            </div>
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
              </div>
            </>
          )}

          {steps === 2 && (
            <>
              <Address />
            </>
          )}

          {steps === 3 && (
            <div className="Checkout__Container">
              <div className="Cart__Body">
                <div className="Checkout__Sec">
                  <h3> CHECKOUT CART</h3>

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
                </div>

                <div className="Delivery_Container">
                  <h3> DELIVERY INFORMATION</h3>
                  <div className="Delivery_Container__Information">
                    <h4> Full Name </h4>
                    <p>Taiwo Boluwatife</p>
                  </div>
                  <div className="Delivery_Container__Information">
                    <h4> Phone Number </h4>
                    <p>08149055068</p>
                  </div>
                  <div className="Delivery_Container__Information">
                    <h4> Location </h4>
                    <p>Funaab Agbede</p>
                  </div>
                  <div className="Delivery_Container__Information">
                    <h4> Address </h4>
                    <p>
                      No 5, kajola street , Igbeba Road , Ijebu ode , Ogun state
                    </p>
                  </div>
                </div>

                <CartSummary cartItem={cartItem} TotalCart={TotalCart} />
              </div>
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
