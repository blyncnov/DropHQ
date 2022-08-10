import React from "react";

import { useDispatch } from "react-redux";

import { CANCEL__ORDER, ADD__TO__CART } from "../../redux/actions/action";

const OrderDesc = ({ isUserOrdering }) => {
  const dispatch = useDispatch();

  const AddToCartHandler = (e) => {
    e.preventDefault();

    const QTY = e.target.qty.value;
    const Price = e.target.price.value;

    console.log(QTY, Price);
    dispatch({
      type: ADD__TO__CART,
      payload: {
        id: 4,
        QTY: QTY,
        name: "Pasta",
        price: Price,
      },
    });

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
            <h4>Jollof Rice</h4>
            <form onSubmit={AddToCartHandler}>
              <div className="OrderDesc__Order__Amount">
                <input
                  type="number"
                  min="1"
                  max="1000"
                  name="qty"
                  onChange={(e) => e.target.value}
                  defaultValue={1}
                />
                <input
                  type="number"
                  name="price"
                  onChange={(e) => e.target.value}
                  placeholder="Enter amount you want to buy"
                />
              </div>
              <div className="group__button">
                <button type="submit">Add</button>
                <button onClick={CancelOrderHandler}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDesc;
