import React from "react";

import { useRouter } from "next/router";

import IS__ORDERING from "../../redux/actions/action";
import { useSelector, useDispatch } from "react-redux";

import { AiFillStar } from "react-icons/ai";

import CartQTY from "../../components/util/CartQTY";
import OrderDesc from "../../components/cart/OrderDesc";

import Menu from "../../data/menu";
import Restaurants from "../../data/restaurants";

const SingleRestaurant = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { id } = router.query;
  const Restaurant__Information = Restaurants.find(
    (restaurant) => restaurant.id == id
  );

  // console.log(Restaurant__Information);

  const isUserOrdering = useSelector((state) => state.cartReducer.isOrdering);

  const OrderOptionHandler = (id) => {
    const ItemOrder = Menu.find((item) => item.id === id);
    dispatch({ type: IS__ORDERING, payload: ItemOrder });
  };

  return (
    <>
      <div className="Single__Restaurants__Container">
        <div className="Single__Restaurants__Container-Box">
          <div className="Layout__constraint">
            <div className="Single__Restaurants__Container-Flex">
              <div className="Single__Restaurants__Container-Box-Image-Card">
                <h1> {Restaurant__Information.name.slice(0, 1)} </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="Layout__constraint">
          <div className="Single__Restaurants__Text">
            <br />
            <h1> {Restaurant__Information.name} </h1>
            <br />
            <br />
            <p>{Restaurant__Information.desc}</p>
          </div>
          <div className="About__Text__Description">
            {2 == 2 ? (
              <div>
                <div className="Restaurant__Review__Tab">
                  <AiFillStar />
                  <p>
                    4.2{" "}
                    <span>
                      {Restaurant__Information.rating > 4.5
                        ? "Top Star"
                        : "Very Good"}
                    </span>
                  </p>
                </div>
              </div>
            ) : (
              <p>No reviews yet</p>
            )}
          </div>
        </div>
        <br />
        <div className="Layout__constraint">
          <div className="Restaurant__Menu">
            <h2>Full Menu</h2>
            <div className="Restaurant__Menu__Grid">
              {Menu.map((item) => {
                return (
                  <div key={item.id} className="Restaurant__Menu__Grid__Box">
                    <div>
                      <h3>{item.name} </h3>
                      <h4>{`₦${item.price}`}</h4>
                    </div>
                    <div>
                      <button onClick={() => OrderOptionHandler(item.id)}>
                        Add
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <CartQTY />
      <OrderDesc isUserOrdering={isUserOrdering} />
    </>
  );
};

export default SingleRestaurant;
