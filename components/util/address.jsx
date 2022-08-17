import React from "react";
import { useDispatch } from "react-redux";

const Address = ({ OrderHandlerProps }) => {
  const dispatch = useDispatch();

  const getAddressInfoHandler = (e) => {
    e.preventDefault();

    const FullName = e.target.fullName.value;
    const PhoneNumber = e.target.phoneNumber.value;
    const Location = e.target.location.value;
    const address = e.target.address.value;

    dispatch({
      type: "GET__ADDRESS",
      payload: { FullName, PhoneNumber, Location, address },
    });
    OrderHandlerProps();
  };

  return (
    <>
      <div>
        <div className="Login__Section">
          <div className="Login__Box Login__Box__Transparent">
            <div className="Login__Right__Side Login__Right__Side__Address">
              <div className="Login__Container__Inside">
                <div>
                  <div className="login__information Address__text">
                    <p className="text">Fill in your delivery information</p>
                  </div>
                  <div className="Login__Form">
                    <form onSubmit={getAddressInfoHandler}>
                      <div className="login__input">
                        <label htmlFor="fname">Full Name :</label>
                        <br />
                        <input
                          type="text"
                          name="fullName"
                          placeholder="Full Name"
                          onChange={(e) => e.target.value}
                          required
                        />
                      </div>

                      <div className="login__input">
                        <label htmlFor="fname">Phone Number :</label>
                        <br />
                        <input
                          type="text"
                          name="phoneNumber"
                          placeholder="Phone Number"
                          onChange={(e) => e.target.value}
                          required
                        />
                      </div>

                      <div className="login__input">
                        <label htmlFor="fname">Location :</label>
                        <br />
                        <select
                          name="location"
                          id="location"
                          onChange={(e) => e.target.value}
                          required
                        >
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
                          onChange={(e) => e.target.value}
                          required
                        />
                      </div>
                      <div className="login__input">
                        <input
                          style={{ backgroundColor: "black", color: "white" }}
                          type="submit"
                          value="Next"
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
    </>
  );
};

export default Address;
