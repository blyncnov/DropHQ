import React from "react";

import { GiShoppingCart } from "react-icons/gi";
import { AiOutlineHome } from "react-icons/ai";

const Cart = () => {
  return (
    <div className="cart__container__body">
      <div className="Layout__constraint">
        <div className="cart__container">
          <div className="cart__header">
            <div className="item-group">
              <span>
                <GiShoppingCart style={{ fontSize: "1.5em" }} />
              </span>
              <div className="cart__count">1</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
