import React from "react";

const CartSummary = ({ cartItem, TotalCart }) => {
  return (
    <>
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
    </>
  );
};

export default CartSummary;
