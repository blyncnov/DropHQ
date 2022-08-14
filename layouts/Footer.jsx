import React from "react";

const Footer = () => {
  return (
    <>
      <div className="Footer__Container">
        <div className="Layout__constraint">
          <div className="Footer__Content">
            <div className="box" id="locations">
              <h1>DropHQ</h1>
              <p>
                Great food makes people think of big family dinners. Discover
                local, on-demand delivery or Pickup from restaurants, nearby
                grocery and convenience stores, and more.
              </p>
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
            <div className="box" id="contacts">
              <h3>Our Social Media</h3>
              <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
              </ul>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="Footer__incorp">
            <h6>© 2022 | drop-hq.com</h6>
            <h6>
              Made with 💖{" "}
              <a
                href="https://blyncnov.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blyncnov
              </a>
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
