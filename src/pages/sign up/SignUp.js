import "./signup.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import TokoBengkel from "../../api/TokoBengkel";
import { useAuth } from "../../config/Auth";
import { Redirect } from "react-router-dom";

const SignUp = () => {
  const [Nama, setNama] = useState("");
  const [Email, setEmail] = useState("");
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    await TokoBengkel.post("/api/auth/register", {
      name: Nama,
      email: Email,
      username: Username,
      password: Password,
    });
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
    <div className="signup-container">
      <div className="signup-form-wrapper">
        <h1>SIGN UP</h1>
        <p className="signup-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <form onSubmit={handleSignUp} className="signup-form">
          <p>Nama Lengkap</p>
          <input
            className="signup-input"
            placeholder="Nama Lengkap"
            onChange={(e) => setNama(e.target.value)}
          />
          <p>Email</p>
          <input
            className="signup-input"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>Username</p>
          <input
            className="signup-input"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <p>Password</p>
          <input
            className="signup-input"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link to="Signin">
            <p className="navigate-signup">
              Sudah punya akun?
              <span className="signIn-disini">sign in disini!</span>
            </p>
          </Link>
          <input
            className="contact-submit"
            type="submit"
            value="Submit"
          ></input>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
