import "./welcome.css";
import { Button, Image } from "antd";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-wrapper">
        <div className="welcome-text-wrapper">
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Button className="welcome-button" type="primary">
            Order Now <i className="fas fa-shopping-cart"></i>
          </Button>
        </div>
        <div className="welcome-image">
          <Image
            width={500}
            src="https://reparasimobil.com/wp-content/uploads/2020/11/c02f5b75d1-300x216.jpg"
          />
        </div>
      </div>
        <button className="welcome-button-chat">
          <i className="fas fa-comment-dots" style={{ fontSize: "25px" }}></i>
        </button>
    </div>
  );
};

export default Welcome;
