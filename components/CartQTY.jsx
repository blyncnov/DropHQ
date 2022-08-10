import React from "react";
import Link from "next/link";

import { useSelector } from "react-redux";

import { GiShoppingCart } from "react-icons/gi";

const CartQTY = () => {
  const cart = useSelector((state) => state.cartReducer.cart);

  return (
    <div className="cart__container__body">
      <div className="Layout__constraint">
        <div className="cart__container">
          <div className="cart__header">
            <Link href="/cart">
              <a>
                <div className="item-group">
                  <span>
                    <GiShoppingCart style={{ fontSize: "1.5em" }} />
                  </span>
                  <div className="cart__count">{cart.length}</div>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartQTY;
