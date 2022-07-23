import React from "react";

const HeroSection = () => {
  return (
    <div className="Hero__Container">
      <div className="Layout__constraint">
        <div className="Hero__Container">
          <div className="Hero__Container">
            <div className="Hero__Container--Text">
              <span className="Hero__Greet">Hello</span>
              <h1>
                I&apos;m your personal <span>psychologist</span>{" "}
              </h1>
              <p>
                Psychology is a branch of medicine that studies the mental state
                of mind and behaviour .it includes the study of conscious and
                unconscious phenomena , as well as the feelings and thought.
              </p>
              <button className="btn">Get Theraphy Session</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
