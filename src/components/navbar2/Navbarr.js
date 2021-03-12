import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import "./navbarr.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [navState, setNavState] = useState("Home");
  const handleChange = (e) => {
    setNavState(e.target.innerText);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            INI LOGO
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className={`nav-item ${
                navState === "Home" && "nav-item-active"
              }`}
              onClick={handleChange}>
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className={`nav-item ${
                navState === "Produk" && "nav-item-active"
              }`}
              onClick={handleChange}>
              <Link
                to="/product"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Produk
              </Link>
            </li>
            <li className={`nav-item ${
                navState === "Tracking" && "nav-item-active"
              }`}
              onClick={handleChange}>
              <Link
                to="/tracking"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Tracking
              </Link>
            </li>

            <li className={`nav-item ${
                navState === "About Us" && "nav-item-active"
              }`}
              onClick={handleChange}>
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About Us
              </Link>
            </li>

            <li className={`nav-item ${
                navState === "Trolley" && "nav-item-active"
              }`}
              onClick={handleChange}>
              <Link
                to="/trolley"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Trolley
              </Link>
            </li>

            <li>
              <Link
                to="/Signin"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign In
              </Link>
            </li>
          </ul>
          {button && (
            <Link to="/Signin" className="nav-links" onClick={closeMobileMenu}>
              <Button>SIGN IN</Button>
            </Link>
          )}
          <a target="_blank" href="https://api.whatsapp.com/send?phone=6289643504876">
            <button className="welcome-button-chat">
              <i
                className="fas fa-comment-dots"
                style={{ fontSize: "25px" }}
              ></i>
            </button>
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
