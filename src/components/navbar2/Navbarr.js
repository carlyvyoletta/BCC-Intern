import React, { useState, useEffect } from "react";
import { Button, Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";
import "./navbarr.css";
import Avatar from "antd/lib/avatar/avatar";
import { DownOutlined } from "@ant-design/icons";
import { useAuth } from "../../config/Auth";
import LogoTokoBengkel from "../../asset/Home/LogoTokoBengkel.png"

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const { setAuthTokens, authTokens } = useAuth();

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

  const Logout = () => {
    setAuthTokens();
    localStorage.clear();
  };

  const menu = (
    <Menu className="navbar-avatar">
      <Link to="/history">
        <Menu.Item className="navbar-avatar-item">
          <i className="fas fa-history"></i>History
        </Menu.Item>
      </Link>
      <Link to="/Signin">
        <Menu.Item onClick={Logout} className="navbar-avatar-item">
          <i className="fas fa-sign-out-alt"></i>Log Out
        </Menu.Item>
      </Link>
    </Menu>
  );

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={LogoTokoBengkel} style={{width: 120}}/>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li
              className={`nav-item ${navState === "Home" && "nav-item-active"}`}
              onClick={handleChange}
            >
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li
              className={`nav-item ${
                navState === "Produk" && "nav-item-active"
              }`}
              onClick={handleChange}
            >
              <Link
                to="/product"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Produk
              </Link>
            </li>
            <li
              className={`nav-item ${
                navState === "Tracking" && "nav-item-active"
              }`}
              onClick={handleChange}
            >
              <Link
                to="/tracking"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Tracking
              </Link>
            </li>

            <li
              className={`nav-item ${
                navState === "About Us" && "nav-item-active"
              }`}
              onClick={handleChange}
            >
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About Us
              </Link>
            </li>

            <li
              className={`nav-item ${
                navState === "Trolley" && "nav-item-active"
              }`}
              onClick={handleChange}
            >
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
          {!authTokens && button && (
            <Link to="/Signin" className="nav-links" onClick={closeMobileMenu}>
              <Button>SIGN IN</Button>
            </Link>
          )}
          {authTokens && (
            <Dropdown overlay={menu}>
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                <Avatar size={40}></Avatar> <DownOutlined />
              </a>
            </Dropdown>
          )}
          <div className="button-chat-directWA">
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=6289643504876"
            >
              <button className="welcome-button-chat">
                <i
                  className="fas fa-comment-dots"
                  style={{ fontSize: "25px" }}
                ></i>
              </button>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
