import React from "react";
import Link from "next/link";

import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignupPageComponent = () => {
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
                <p>Great food makes people think of big family dinners.</p>
              </div>
              <div className="Login__Right__Side">
                <div>
                  <div>
                    <div className="login__information">
                      <p>Please provide your valid information to Signup .</p>
                    </div>
                    <div className="login__form">
                      <form>
                        <div className="login__input">
                          <label htmlFor="fname">Username :</label>
                          <br />
                          <input
                            type="text"
                            defaultValue="blyncnov"
                            name="username"
                            placeholder="Username"
                          />
                        </div>
                        <div className="login__input">
                          <label htmlFor="fname">Email Address :</label>
                          <br />
                          <input
                            type="emmail"
                            name="email"
                            defaultValue="blyncnov@admin.io"
                            placeholder="Password"
                          />
                        </div>
                        <div className="login__input">
                          <label htmlFor="fname">Password :</label>
                          <br />
                          <input
                            type="password"
                            name="password"
                            defaultValue="hjggfgfgnnjkghn"
                            placeholder="Password"
                          />
                        </div>
                        <div className="login__input">
                          <button>Register</button>
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
