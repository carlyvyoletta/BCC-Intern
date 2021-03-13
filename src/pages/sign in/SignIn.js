import "./signin.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import TokoBengkel from "../../api/TokoBengkel";
import { useAuth } from "../../config/Auth";
import { Redirect } from "react-router-dom";

const SignIn = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
    await TokoBengkel.post("/api/auth/login", {
      email: Email,
      password: Password,
    }).then((res) => {
      res.status === 200 && setAuthTokens(res.data.token);
      setLoggedIn(true);
    });
  };

  if (isLoggedIn) {
    return <Redirect to={"/trolley"} />;
  }

  return (
    <div className="signin-container">
      <div onSubmit={handleSignIn} className="signin-form-wrapper">
        <h1>SIGN IN</h1>
        <p className="signin-text">
          Welcome to TokoBengkel!
        </p>
        <form onSubmit={handleSignIn} className="signin-form">
          <p>Email</p>
          <input
            className="signin-input"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>Password</p>
          <input
            className="signin-input"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link to="signup">
            <p className="navigate-signin">
              Belum punya akun?
              <span className="daftar-disini">Daftar disini!</span>
            </p>
          </Link>
          <input className="button-signIn"
            className="contact-submit"
            type="submit"
            value="Sign In"
          ></input>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
