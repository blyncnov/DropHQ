import React from "react";

const SliderComponent = ({ slidesData }) => {
  return (
    <div className="slider__Container">
      <div className="Layout__constraint">
        <h1> {slidesData[0].id}</h1>
      </div>
    </div>
  );
};

export default SliderComponent;
