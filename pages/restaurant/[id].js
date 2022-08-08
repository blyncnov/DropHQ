import React from "react";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";

const SingleRestaurant = () => {
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
          <br />
          <div className="Layout__constraint">
            <div className="Restaurant__Menu">
              <h2>Our Menu</h2>
              <div className="Restaurant__Menu__Grid">
                <div className="Restaurant__Menu__Grid__Box">
                  <h3>Bread </h3>
                  <h4> ₦250.00</h4>
                </div>
                <div className="Restaurant__Menu__Grid__Box">
                  <h3>Jollof & Rice </h3>
                  <h4> ₦100.00</h4>
                </div>
                <div className="Restaurant__Menu__Grid__Box">
                  <h3>Snacks</h3>
                  <h4> ₦8.00</h4>
                </div>
                <div className="Restaurant__Menu__Grid__Box">
                  <h3>Table Water</h3>
                  <h4> ₦100.00</h4>
                </div>
                <div className="Restaurant__Menu__Grid__Box">
                  <h3>Chivita</h3>
                  <h4> ₦400.00</h4>
                </div>
                <div className="Restaurant__Menu__Grid__Box">
                  <h3>Turkey</h3>
                  <h4> ₦1500.00</h4>
                </div>
                <div className="Restaurant__Menu__Grid__Box">
                  <h3>Egg</h3>
                  <h4> ₦100.00</h4>
                </div>
                <div className="Restaurant__Menu__Grid__Box">
                  <h3>Salad</h3>
                  <h4> ₦150.00</h4>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default SingleRestaurant;
