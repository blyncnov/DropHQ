import React from "react";

const Footer = () => {
  return (
    <>
      <div className="Footer__Container">
        <div className="Layout__constraint">
          <div className="Footer__Content">
            <div className="box">
              <h1>DropHQ</h1>
              <p>Great food makes people think of big family dinners.</p>
            </div>

            <div className="box">
              <h3>Discover Us</h3>
              <ul>
                <li>Home</li>
                <li>Categories</li>
                <li>About</li>
                <li>Login</li>
                <li>Become a Rider</li>
              </ul>
            </div>
            <div className="box">
              <h3>Our Social Media</h3>
              <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
              </ul>
            </div>
          </div>
          <h6>2022 | drop-hq.com</h6>
        </div>
      </div>
    </>
  );
};

export default Footer;
