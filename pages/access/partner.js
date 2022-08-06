import React from "react";
import Link from "next/link";

const PartnerWithDropHQ = () => {
  return (
    <div>
      <div className="Login__Container">
        <div className="Layout__constraint">
          <div className="Login__Section">
            <div className="Login__Box">
              <div className="Login__Left__Side">
                <Link href="/">
                  <a>
                    <h1>DropHQ</h1>
                  </a>
                </Link>
                <p>Partner with us Today.</p>
              </div>
              <div className="Login__Right__Side">
                <div>
                  <div>
                    <div className="login__information">
                      <p>
                        Please provide your valid information to become a RIDER
                        .
                      </p>
                    </div>
                    <div className="login__form">
                      <form>
                        <div className="group__form">
                          <div className="login__input">
                            <label htmlFor="fname">First Name :</label>
                            <br />
                            <input
                              type="text"
                              name="firstname"
                              placeholder="Enter First Name"
                            />
                          </div>
                          <div className="login__input">
                            <label htmlFor="fname">Last Name :</label>
                            <br />
                            <input
                              type="text"
                              name="lastname"
                              placeholder="Enter last name"
                            />
                          </div>
                        </div>

                        <div className="login__input">
                          <label htmlFor="fname">Phone Number :</label>
                          <br />
                          <input
                            type="tel"
                            name="phonenumber"
                            placeholder="+(234) 814 9055 068"
                          />
                        </div>

                        <div className="login__input">
                          <label htmlFor="fname">Email Address :</label>
                          <br />
                          <input
                            type="email"
                            name="email"
                            placeholder="Enter valid email address"
                          />
                        </div>

                        <div className="login__input">
                          <label htmlFor="fname">Upload CV :</label>
                          <br />
                          <input type="file" name="cv" placeholder="cv" />
                        </div>

                        <div className="login__input">
                          <button>Become a rider</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerWithDropHQ;
