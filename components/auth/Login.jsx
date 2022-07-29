import React from "react";
import Link from "next/link";

import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const LoginPageComponents = () => {
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
                <div className="Login__Container__Inside">
                  <div>
                    <div className="login__information">
                      <p>Please enter your username and password to login.</p>
                    </div>
                    <div className="Login__Form">
                      <form>
                        <div className="login__input">
                          <label htmlFor="fname">Username :</label>
                          <br />
                          <input
                            type="text"
                            value="bholuwatife00@gmail.com"
                            name="username"
                            placeholder="Username"
                          />
                        </div>
                        <div className="login__input">
                          <label htmlFor="fname">Password :</label>
                          <br />
                          <input
                            type="password"
                            name="password"
                            value="hjggfgfgnnjkghn"
                            placeholder="Password"
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
