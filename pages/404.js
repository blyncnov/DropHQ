import React from "react";
import Link from "next/link";
import Image from "next/image";

import ErrorImage from "../public/assets/images/what-404.png";

const PageNotFound = () => {
  return (
    <>
      <div className="Layout__constraint">
        <div className="Error__Container">
          <div className="Error__Container__content">
            <Image src={ErrorImage} alt="page-not-found" />
          </div>
          <div className="Error__Container__text">
            <h1>Awwnn.... Don&apos;t Cry.</h1>
            <p>
              What you&apos;re looking for may have been misplaced in long term
              memory.
            </p>
            <Link href="/">
              <a>
                <button className="Error__Page__Button">Go Back Home</button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
