import "./navbar.css";
import { Button } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [navState, setNavState] = useState("Home");
  const handleChange = (e) => {
    setNavState(e.target.innerText);
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
                navState === "Home" && "navbar-menu-active"
              }`}
              onClick={handleChange}
            >
              Home
            </span>
          </Link>
          <Link to="/product">
            <span
              className={`navbar-menu-item ${
                navState === "Produk" && "navbar-menu-active"
              }`}
              onClick={handleChange}
            >
              Produk
            </span>
          </Link>
          <Link to="/tracking">
            <span
              className={`navbar-menu-item ${
                navState === "Tracking" && "navbar-menu-active"
              }`}
              onClick={handleChange}
            >
              Tracking
            </span>
          </Link>
          <Link to="about">
            <span
              className={`navbar-menu-item ${
                navState === "About Us" && "navbar-menu-active"
              }`}
              onClick={handleChange}
            >
              About Us
            </span>
          </Link>
          <Link to="trolley">
            <span
              className={`navbar-menu-item ${
                navState === "Trolley" && "navbar-menu-active"
              }`}
              onClick={handleChange}
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
