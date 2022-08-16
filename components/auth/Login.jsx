import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const LoginPageComponents = () => {
  const router = useRouter();

  const LoginHandler = (e) => {
    e.preventDefault();

    const Email = e.target.email.value;
    const Password = e.target.password.value;

    console.log(Email, Password);

    axios
      .post("https://drophq.herokuapp.com/api/v1/auth/login", {
        Email,
        Password,
      })
      .then((response) => {
        localStorage.setItem("droptoken", response.data.token);
        toast.success(response.data.message, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        router.push("/");
      })
      .catch((err) => {
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
                <div className="Login__Container__Inside">
                  <div>
                    <div className="login__information">
                      <p>Please enter your username and password to login.</p>
                    </div>
                    <div className="Login__Form">
                      <form onSubmit={LoginHandler}>
                        <div className="login__input">
                          <label htmlFor="fname">Email Address</label>
                          <br />
                          <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            onChange={(e) => e.target.value}
                            required
                          />
                        </div>

                        <div className="login__input">
                          <label htmlFor="fname">Password </label>
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
                          <button>Login</button>
                        </div>
                      </form>
                      <div className="login__check">
                        <Link href="/auth/recover">
                          <a>Forgot Password</a>
                        </Link>
                        <Link href="/auth/signup">
                          <a>Register</a>
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

export default LoginPageComponents;
