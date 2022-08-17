import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { CANCEL__ORDER, ADD__TO__CART } from "../../redux/actions/action";

const OrderDesc = ({ isUserOrdering }) => {
  const dispatch = useDispatch();

  const myCart = useSelector((state) => state.cartReducer.cart);
  const amOrdering = useSelector((state) => state.cartReducer.amOrdering);

  console.log(amOrdering);

  const AddToCartHandler = (e) => {
    e.preventDefault();

    const QTY = e.target.qty.value;
    const Price = e.target.price.value;
    const description = e.target.description.value;

    const isItemExistIncart = myCart.find((item) => item.id === amOrdering.id);

    try {
      if (isItemExistIncart) {
        alert("Item already exist in cart");
      } else {
        dispatch({
          type: ADD__TO__CART,
          payload: {
            id: amOrdering.id,
            QTY: QTY,
            name: amOrdering.name,
            price: Price,
            description: description,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
    dispatch({ type: CANCEL__ORDER });
  };

  const CancelOrderHandler = () => {
    dispatch({ type: CANCEL__ORDER });
  };

  return (
    <div>
      <div
        className={
          isUserOrdering
            ? "OrderDesc__Container isOrdering"
            : "OrderDesc__Container"
        }
      >
        <div className="OrderDesc__Header">
          <h3>Order Quantity</h3>
          <br />
          <div className="OrderDesc__Qty">
            <h4>{amOrdering.name} </h4>
            <form onSubmit={AddToCartHandler}>
              <div className="OrderDesc__Order__Amount">
                <div>
                  <p>
                    <span>*</span> Quantity
                  </p>
                  <input
                    type="number"
                    min="1"
                    max="1000"
                    name="qty"
                    onChange={(e) => e.target.value}
                    defaultValue={1}
                  />
                </div>
                <div>
                  <p>
                    <span>*</span> Price (₦)
                  </p>
                  <input
                    type="number"
                    name="price"
                    defaultValue={amOrdering.price}
                    onChange={(e) => e.target.value}
                    placeholder="Enter amount you want to buy"
                  />
                </div>
              </div>
              <div className="add__description">
                <p>
                  <span>*</span> Optional{" "}
                </p>
                <input
                  type="text"
                  name="description"
                  onChange={(e) => e.target.value}
                  placeholder="Enter description e.g 'abeg na soft meat i want' "
                />
              </div>
              <div className="group__button">
                <button type="submit">Add</button>
                <div onClick={CancelOrderHandler}>Cancel</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDesc;
