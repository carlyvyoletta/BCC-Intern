import "./signin.css";
import { Link } from "react-router-dom";
import React, {useState} from "react";
import TokoBengkel from '../../api/TokoBengkel'


const SignIn = () => {

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    await TokoBengkel.post("/api/auth/login", {
      email: Email,
      password: Password
    }).then ((res) => {
      // res.status === 200 && setAuthTokens(res.data.data.access_token)
      console.log(res)
    })
  };

  return (
    <div className="signin-container">
      <div onSubmit={handleSignIn} className="signin-form-wrapper">
        <h1>SIGN IN</h1>
        <p className="signin-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="signin-form">
        <p>Email</p>
        <input className="signin-input" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
        <p>Password</p>
        <input className="signin-input" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
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
