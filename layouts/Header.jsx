import React from "react";
import HeroSection from "../components/HeroSection";

// Components
import Navigations from "./Navigations";

const Header = () => {
  return (
    <>
      <div className="Header__Container">
        <Navigations />
        <HeroSection />
      </div>
    </>
  );
};

export default Header;
