import React from "react";
import Image from "next/image";

import { AiFillStar } from "react-icons/ai";
import Link from "next/link";

import Slugify from "../utils/Slugify";

import Restaurants from "../data/restaurants";

const OurRestaurants = () => {
  return (
    <div className="About__Container">
      <div className="Layout__constraint">
        <h1>Our Restaurants</h1>
        <div className="Restaurant__Slider">
          {Restaurants.map((restaurant) => {
            return (
              <div key={restaurant.id} className="About__Box">
                <div className="About__Img">
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
    </div>
  );
};

export default OurRestaurants;
