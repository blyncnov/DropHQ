import React from "react";
import Link from "next/link";

const PageNotFound = () => {
  return (
    <>
      <div className="Layout__constraint">
        <h1>Error Page</h1>
        <Link href="/">
          <a>
            <li>Go Home</li>
          </a>
        </Link>
      </div>
    </>
  );
};

export default PageNotFound;
