import React from "react";

import CartComponent from "../../components/cart/Cart";

import Navigation from "../../layouts/Navigations";
import Footer from "../../layouts/Footer";

const Cart = () => {
  return (
    <div>
      <div className="Restaurant__Header">
        <Navigation />
      </div>
      <CartComponent />
      <Footer />
    </div>
  );
};

export default Cart;
