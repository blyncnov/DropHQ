import React, { useState, useEffect } from "react";
import Link from "next/link";

import { FaBars, FaTimes } from "react-icons/fa";

import Navigation__Data from "../data/Navigation-Data";

const Navigations = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClickToggle = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="Navigation__Container">
      <div className="Layout__constraint">
        <nav>
          <div className="Left-Navigation">
            <Link href="/">
              <a>
                <h1>DropHQ</h1>
              </a>
            </Link>
          </div>
          <div
            className={
              isClicked ? "Right-Navigation active" : "Right-Navigation "
            }
          >
            <ul className="Navigation__List">
              {Navigation__Data.map((li) => {
                return (
                  <Link href={li.link} key={li.id}>
                    <a>
                      <li className="Navigation__li">{li.name}</li>
                    </a>
                  </Link>
                );
              })}
            </ul>
            <button>Download App</button>
          </div>
          <div className="Navigation__Mobile" onClick={handleClickToggle}>
            {isClicked ? (
              <FaTimes style={{ fontSize: "1.8em", color: "#ffffff" }} />
            ) : (
              <FaBars style={{ fontSize: "1.8em", color: "#ffffff" }} />
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navigations;
