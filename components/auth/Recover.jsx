import React from "react";
import Link from "next/link";

const RecoverComponent = () => {
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
                      <p>
                        Please enter your valid email address ro recover
                        account.
                      </p>
                    </div>
                    <div className="Login__Form">
                      <form>
                        <div className="login__input">
                          <label htmlFor="fname">Email Address:</label>
                          <br />
                          <input
                            type="text"
                            value="bholuwatife00@gmail.com"
                            name="email"
                            placeholder="email"
                          />
                        </div>
                        <div className="login__input">
                          <button>Recover Account</button>
                        </div>
                      </form>
                      <div className="login__check">
                        <Link href="/auth/login">
                          <a>Login</a>
                        </Link>
                        <Link href="/auth/signup">
                          <a>Register</a>
                        </Link>
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

export default RecoverComponent;
