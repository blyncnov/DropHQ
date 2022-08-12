import React from "react";

import Navigation from "../../layouts/Navigations";
import Footer from "../../layouts/Footer";

import Image from "next/image";

import { AiFillStar } from "react-icons/ai";
import Link from "next/link";

import RestaurantsData from "../../data/restaurants";

const Restaurants = () => {
  return (
    <>
      <div className="Restaurant__Header">
        <Navigation />
        <div className="Layout__constraint">
          <div className="Restaurant__Header__text">
            <h2>Our available restaurant</h2>
            <h4>
              Feeling like having pizza? How about Sushi? Satisfy your cravings
              with a few quick clicks and enjoy the world of delivery! Check a
              great selection of restaurants by selecting a category below.
            </h4>
          </div>
        </div>
      </div>
      <div className="Layout__constraint">
        <div className="Restaurant__Slider Restaurant__Slider__Grid">
          {RestaurantsData.map((restaurant) => {
            return (
              <div key={restaurant.id} className="About__Box">
                <div className="Restaurant__Image">
                  <Image
                    src={restaurant.image}
                    alt="restaurant"
                    layout="responsive"
                  />
                </div>
                <div className="About__Text__Description">
                  <h1>{restaurant.name}</h1>
                  {2 == 2 ? (
                    <div>
                      <div className="Restaurant__Review__Tab">
                        <AiFillStar />
                        <p>
                          4.2{" "}
                          <span>{4.7 > 4.5 ? "Top Star" : "Very Good"}</span>
                        </p>
                      </div>
                    </div>
                  ) : (
                    <p>No reviews yet</p>
                  )}
                  <p>{restaurant.desc}</p>
                  <Link href={`/restaurants/${restaurant.id}`}>
                    <a>
                      <button className="btn">View Restaurant </button>
                    </a>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Restaurants;
