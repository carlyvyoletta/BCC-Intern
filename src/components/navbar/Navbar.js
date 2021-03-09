import "./navbar.css";
import { Button } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navState, setNavState] = useState("home");
  const handleChange = e => {
    setNavState(e.target.name);
  };

  return (
    <div>
      <div className="navbar-container">
        <a href="/">
          <img className="navbar-logo" src="" alt="gambar-logo" />
        </a>
        <div className="navbar-menu-wrapper">
          <Link to="/">
            <span
              className={`navbar-menu-item ${
                navState === "home" && "navbar-menu-active"
              }`}
              onClick={handleChange}
              name="home"
            >
              Home
            </span>
          </Link>
          <Link to="/product">
            <span
              className={`navbar-menu-item ${
                navState === "product" && "navbar-menu-active"
              }`}
              onClick={handleChange}
              name="product"
            >
              Produk
            </span>
          </Link>
          <Link to="/tracking">
            <span
              className={`navbar-menu-item ${
                navState === "tracking" && "navbar-menu-active"
              }`}
              onClick={handleChange}
              name="tracking"
            >
              Tracking
            </span>
          </Link>
          <Link to="about">
            <span
              className={`navbar-menu-item ${
                navState === "about" && "navbar-menu-active"
              }`}
              onClick={handleChange}
              name="about"
            >
              About Us
            </span>
          </Link>
          <Link to="trolley">
            <span
              className={`navbar-menu-item ${
                navState === "trolley" && "navbar-menu-active"
              }`}
              onClick={handleChange}
              name="trolley"
            >
              Trolley
            </span>
          </Link>
        </div>
        <Link to="/Signin">
          <Button type="primary">Sign In</Button>
        </Link>
      </div>
      <div>
        <Link to="api.whatsapp.com/send?phone=6289643504876">
          <button className="welcome-button-chat">
            <i className="fas fa-comment-dots" style={{ fontSize: "25px" }}></i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
