import "./signin.css";
import { Link } from "react-router-dom";
import React from "react";

const SignIn = () => {
  return (
    <div className="signin-container">
      <div className="signin-form-wrapper">
        <h1>SIGN IN</h1>
        <p className="signin-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="signin-form">
        <p>Email/Username</p>
        <input className="signin-input" />
        <p>Password</p>
        <input className="signin-input" />
        <Link to="signup">
          <p className="navigate-signin">Belum punya akun? Daftar disini!</p>
        </Link>
        <input className="contact-submit" type="submit" value="Submit"></input>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
