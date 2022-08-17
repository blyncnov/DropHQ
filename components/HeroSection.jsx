import React from "react";
import { useRouter } from "next/router";

import { HiLocationMarker } from "react-icons/hi";
import { MdOutlineLocationSearching } from "react-icons/md";

import Restaurants from "../data/restaurants";

const HeroSection = () => {
  const router = useRouter();

  const searchForRestaurantsHandler = (e) => {
    e.preventDefault();

    const value = e.target.search.value;

    console.log(value);

    router.push(`/restaurants/?${value}`);
  };

  return (
    <div className="Hero__Container">
      <div className="Layout__constraint">
        <div className="Hero__Container">
          <div className="Hero__Container">
            <div className="Hero__Container--Text">
              <h1>Restaurants and more, delivered to your door.</h1>
              <p>
                Great food makes people think of big family dinners. So you may
                want to position your restaurant as a place to bring the whole
                family.
              </p>
              <form onSubmit={searchForRestaurantsHandler}>
                <div className="Search__For__Restaurant">
                  <>
                    <HiLocationMarker style={{ fontSize: "1.2em" }} />
                  </>
                  <input
                    type="search"
                    name="search"
                    placeholder="Find available restaurants"
                    autoComplete="true"
                    list="restaurants"
                    onChange={(e) => e.target.value}
                  />
                  <datalist id="restaurants">
                    {Restaurants.map((restaurant, index) => {
                      return <option key={index} value={restaurant.name} />;
                    })}
                  </datalist>

                  <button type="submit">
                    <MdOutlineLocationSearching style={{ fontSize: "1.2em" }} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
