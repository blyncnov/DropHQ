import React from "react";

import Navigation from "../../layouts/Navigations";
import Footer from "../../layouts/Footer";

import Image from "next/image";

import ImageOne from "../../public/assets/images/res-1.jpeg";
import ImageTwo from "../../public/assets/images/res-2.jpeg";
import ImageThree from "../../public/assets/images/res-3.avif";
import ImageFour from "../../public/assets/images/res-4.avif";

import { AiFillStar } from "react-icons/ai";
import Link from "next/link";

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
          <div className="About__Box">
            <div className="About__Img Restaurant__Img">
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
              <Link href="restaurants/if">
                <a>
                  <button className="btn">View Restaurant </button>
                </a>
              </Link>
            </div>
          </div>
          <div className="About__Box">
            <div className="About__Img Restaurant__Img">
              <Image src={ImageTwo} alt="restaurant" layout="responsive" />
            </div>
            <div className="About__Text__Description">
              <h1>Bamboo Kitchen</h1>
              {2 == 3 ? <p>Hi</p> : <p>No reviews yet</p>}
              <p>Ofada rice and Banga soup (wine leafs with rice)</p>
              <Link href="restaurants/if">
                <a>
                  <button className="btn">View Restaurant </button>
                </a>
              </Link>{" "}
            </div>
          </div>

          <div className="About__Box">
            <div className="About__Img Restaurant__Img">
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
              <Link href="restaurants/if">
                <a>
                  <button className="btn">View Restaurant </button>
                </a>
              </Link>{" "}
            </div>
          </div>
          <div className="About__Box">
            <div className="About__Img Restaurant__Img">
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
              <Link href="restaurants/if">
                <a>
                  <button className="btn">View Restaurant </button>
                </a>
              </Link>{" "}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Restaurants;
