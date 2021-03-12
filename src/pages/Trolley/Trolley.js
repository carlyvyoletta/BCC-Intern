import React, {useState} from 'react';
import "./trolley.css";

const Trolley = () => {

  const [Order, setOrder] = useState("");

  
  return (
    <div className="trolley-container">
      <div className="trolley-wrapper">
        <div className="trolley-image">
          <img
            alt="gambar"
            src="https://reparasimobil.com/wp-content/uploads/2020/11/c02f5b75d1-300x216.jpg"
            className="img-fluid d-block"
          />
        </div>
        <div className="trolley-text-wrapper">
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
          <p>Merek : Honda</p>
          <div className="product-harga">
            <p>Harga</p>
            <h2>Rp 500.000</h2>
          </div>
          <div className="produt-buttonAddMinTrash">
            <button className="btn btn-plus">
              <i className="fas fa-plus"></i>
            </button>
            <button className="btn btn-min">
              <i className="fas fa-minus"></i>
            </button>
            <button className="btn btn-trash">
              <i className="fas fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trolley;
