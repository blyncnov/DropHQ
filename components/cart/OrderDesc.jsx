import React from "react";

import { useDispatch } from "react-redux";
import { CANCEL__ORDER } from "../../redux/actions/action";

const OrderDesc = ({ isUserOrdering }) => {
  const dispatch = useDispatch();

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
            <div className="OrderDesc__Order__Amount">
              <input type="number" min="1" max="1000" defaultValue={1} />
              <input type="text" placeholder="Enter amount you want to buy" />
            </div>
            <div className="group__button">
              <button>Add</button>
              <button onClick={CancelOrderHandler}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDesc;
