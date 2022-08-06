import React from "react";

import { HiLocationMarker } from "react-icons/hi";
import { MdOutlineLocationSearching } from "react-icons/md";

const HeroSection = () => {
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
              <div className="Search__For__Restaurant">
                <>
                  <HiLocationMarker style={{ fontSize: "1.2em" }} />
                </>
                <input type="text" placeholder="Find available restaurants" />
                <button>
                  <MdOutlineLocationSearching style={{ fontSize: "1.2em" }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
