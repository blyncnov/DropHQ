import React from "react";
import Link from "next/link";

import IS__ORDERING from "../../redux/actions/action";
import { useSelector, useDispatch } from "react-redux";

import { AiFillStar } from "react-icons/ai";

import Cart from "../../components/CartComp";
import OrderDesc from "../../components/helper/OrderDesc";

import Menu from "../../data/menu";

const SingleRestaurant = () => {
  const dispatch = useDispatch();

  const isUserOrdering = useSelector((state) => state.cartReducer.isOrdering);

  const OrderOptionHandler = () => {
    dispatch({ type: IS__ORDERING });
  };

  return (
    <>
      <div className="Single__Restaurants__Container">
        <div className="Single__Restaurants__Container-Box">
          <div className="Layout__constraint">
            <div className="Single__Restaurants__Container-Flex">
              <div className="Single__Restaurants__Container-Box-Image-Card">
                <h1>B</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="Layout__constraint">
          <div className="Single__Restaurants__Text">
            <h1>Boripe Kitchen</h1>
            <br />
            <br />
            <p>
              Great food makes people think of big family dinners. So you may
              want to position your restaurant as a place to bring the whole
              family.
            </p>
          </div>
          <div className="About__Text__Description">
            {2 == 2 ? (
              <div>
                <div className="Restaurant__Review__Tab">
                  <AiFillStar />
                  <p>
                    4.2 <span>{4.7 > 4.5 ? "Top Star" : "Very Good"}</span>
                  </p>
                </div>
              </div>
            ) : (
              <p>No reviews yet</p>
            )}
          </div>
        </div>
        <>
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
                        <button onClick={OrderOptionHandler}>Add</button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      </div>
      <Cart />
      <OrderDesc isUserOrdering={isUserOrdering} />
    </>
  );
};

export default SingleRestaurant;
