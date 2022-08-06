import React from "react";
import Image from "next/image";

import ImageOne from "../public/assets/images/res-1.jpeg";
import ImageTwo from "../public/assets/images/res-2.jpeg";
import ImageThree from "../public/assets/images/res-3.avif";
import ImageFour from "../public/assets/images/res-4.avif";

import { AiFillStar } from "react-icons/ai";

const About = () => {
  return (
    <div className="About__Container">
      <div className="Layout__constraint">
        <h1>Our Restaurants</h1>
        <div className="Restaurant__Slider">
          <div className="About__Box">
            <div className="About__Img">
              <Image src={ImageOne} alt="restaurant" layout="responsive" />
            </div>
            <div className="About__Text__Description">
              <h1>Mhunis Kitchen</h1>
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
              <p>Nicest place for Pasta & Snacks, grab one for yourself.</p>
              <button className="btn">View Restaurant</button>
            </div>
          </div>
          <div className="About__Box">
            <div className="About__Img">
              <Image src={ImageTwo} alt="restaurant" layout="responsive" />
            </div>
            <div className="About__Text__Description">
              <h1>Bamboo Kitchen</h1>
              {2 == 3 ? <p>Hi</p> : <p>No reviews yet</p>}
              <p>Ofada rice and Banga soup (wine leafs with rice)</p>
              <button className="btn">View Restaurant</button>
            </div>
          </div>

          <div className="About__Box">
            <div className="About__Img">
              <Image src={ImageFour} alt="restaurant" layout="responsive" />
            </div>
            <div className="About__Text__Description">
              <h1>Hands Restaurant</h1>
              {2 == 2 ? (
                <div>
                  <div className="Restaurant__Review__Tab">
                    <AiFillStar />
                    <p>
                      3.2 <span>{1 > 4.5 ? "Top Star" : "Very Good"}</span>
                    </p>
                  </div>
                </div>
              ) : (
                <p>No reviews yet</p>
              )}
              <p>Fried Rice and Turkey, Salad and Fine Wines </p>
              <button className="btn">View Restaurant</button>
            </div>
          </div>
          <div className="About__Box">
            <div className="About__Img">
              <Image src={ImageThree} alt="restaurant" layout="responsive" />
            </div>
            <div className="About__Text__Description">
              <h1>Boripe Restaurant</h1>
              {2 == 2 ? (
                <div>
                  <div className="Restaurant__Review__Tab">
                    <AiFillStar />
                    <p>
                      3.7 <span>{1 > 4.5 ? "Top Star" : "Very Good"}</span>
                    </p>
                  </div>
                </div>
              ) : (
                <p>No reviews yet</p>
              )}
              <p>Okele (Swallow) , Fish , Assorted Meat and Soft Drinks</p>
              <button className="btn">View Restaurant</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
