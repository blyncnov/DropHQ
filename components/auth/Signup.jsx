import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignupPageComponent = () => {
  const router = useRouter();
  const registrationHandler = (e) => {
    e.preventDefault();

    const Name = e.target.name.value;
    const Address = e.target.address.value;
    const PhoneNumber = e.target.phoneNumber.value;
    const Niche = e.target.niche.value;
    const Email = e.target.email.value;
    const Password = e.target.password.value;

    console.log(Name, Address, Email, PhoneNumber, Niche, Password);

    axios
      .post("https://drophq.herokuapp.com/api/v1/auth/register", {
        Name,
        Address,
        Email,
        PhoneNumber,
        Niche,
        Password,
      })
      .then((response) => {
        console.log(response);
        toast.success(response.data.message, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // router.push("/auth/login");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message, {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <div>
      <ToastContainer />
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
                <p>Great food makes people think of big family dinners.</p>
              </div>
              <div className="Login__Right__Side">
                <div>
                  <div>
                    <div className="login__information">
                      <p>Please provide your valid information to Signup .</p>
                    </div>
                    <div className="login__form">
                      <form onSubmit={registrationHandler}>
                        <>
                          <div className="login__input">
                            <label htmlFor="fname">Restaurant Name</label>
                            <br />
                            <input
                              type="text"
                              name="name"
                              placeholder="Restaurant Name"
                              onChange={(e) => e.target.value}
                              required
                            />
                          </div>
                          <div className="login__input">
                            <label htmlFor="fname">Restaurant Address</label>
                            <br />
                            <input
                              type="text"
                              name="address"
                              placeholder="Restaurant Address"
                              onChange={(e) => e.target.value}
                              required
                            />
                          </div>
                        </>
                        <div className="group__form">
                          <div className="login__input">
                            <label htmlFor="fname">Email Address</label>
                            <br />
                            <input
                              type="email"
                              name="email"
                              placeholder="Email address"
                              onChange={(e) => e.target.value}
                              required
                            />
                          </div>
                          <div className="login__input">
                            <label htmlFor="fname">Phone Number</label>
                            <br />
                            <input
                              type="number"
                              name="phoneNumber"
                              placeholder="Phone Number"
                              onChange={(e) => e.target.value}
                              required
                            />
                          </div>
                        </div>
                        <div className="login__input">
                          <label htmlFor="fname">Restaurant Niche</label>
                          <br />
                          <select
                            name="niche"
                            id="niche"
                            onChange={(e) => e.target.value}
                            required
                          >
                            <option defaultValue="Restaurant">
                              Restaurant
                            </option>
                            <option accessKey="Niche" value="Kitchen">
                              Kitchen
                            </option>
                          </select>
                        </div>
                        <div className="login__input">
                          <label htmlFor="fname">Password</label>
                          <br />
                          <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={(e) => e.target.value}
                            required
                          />
                        </div>
                        <div className="login__input">
                          <button type="submit">Register</button>
                        </div>
                      </form>
                      <div className="login__check">
                        <Link href="/auth/recover">
                          <a>Forgot Password</a>
                        </Link>
                        <Link href="/auth/login">
                          <a>Login</a>
                        </Link>
                      </div>
                      <div className="login__option">
                        <button className="btn-facebook">
                          <FaFacebookF /> Login with Facebook
                        </button>
                        <button className="btn-google">
                          <FcGoogle />
                          Login with Google
                        </button>
                      </div>
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

export default SignupPageComponent;
