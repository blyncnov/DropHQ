import React from "react";
import Link from "next/link";

const Address = () => {
  return (
    <>
      <div>
        <div className=" ">
          <div className="">
            <div className="Login__Section">
              <div className="Login__Box">
                <div className="Login__Right__Side">
                  <div className="Login__Container__Inside">
                    <div>
                      <div className="login__information">
                        <p>Fill in your delivery information</p>
                      </div>
                      <div className="Login__Form">
                        <form>
                          <div className="login__input">
                            <label htmlFor="fname">Full Name :</label>
                            <br />
                            <input
                              type="text"
                              name="fullName"
                              placeholder="Full Name"
                            />
                          </div>

                          <div className="login__input">
                            <label htmlFor="fname">Phone Number :</label>
                            <br />
                            <input
                              type="text"
                              name="phoneNumber"
                              placeholder="Phone Number"
                            />
                          </div>

                          <div className="login__input">
                            <label htmlFor="fname">Location :</label>
                            <br />
                            <select name="location" id="location">
                              <option value="">Select Location</option>
                              <option value="Camp">Camp - 500</option>
                              <option value="Isolu">Isolu - 400</option>
                              <option value="Oluwo">Oluwo- 300</option>
                              <option value="Harmony">Harmony - 200</option>
                              <option value="Agbede">Agbede - 300</option>
                            </select>
                          </div>

                          <div className="login__input">
                            <label htmlFor="fname">Delivery Address :</label>
                            <br />
                            <input
                              type="text"
                              name="address"
                              placeholder="Delivery Address  "
                            />
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
    </>
  );
};

export default Address;
