import "./signup.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="signup-form-wrapper">
        <h1>SIGN UP</h1>
        <p className="signup-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="signup-form">
          <p>Nama Lengkap</p>
          <input className="signup-input" />
          <p>Email</p>
          <input className="signup-input"/>
          <p>Username</p>
          <input className="signup-input" />
          <p>Password</p>
          <input className="signup-input"/>
          <Link to="Signin">
            <p className="navigate-signup">Sudah punya akun? sign in disini!</p>
          </Link>
          <Link to="/">
            <input className="contact-submit" type="submit" value="Submit"></input>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
