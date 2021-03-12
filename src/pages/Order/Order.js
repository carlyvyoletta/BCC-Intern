import "./order.css";
import { Link } from "react-router-dom";
import { Upload } from "antd";

const Order = () => {
  return (
    <div className="order-container">
      <div className="order-title">
        <h1>Order</h1>
      </div>
      <div className="order-form-wrapper">
        <form className="order-form">
          <p>Nama</p>
          <input
            className="order-input"
            placeholder="Nama"
            // onChange={(e) => setEmail(e.target.value)}
          />
          <p>Nomor Handphone</p>
          <input
            className="order-input"
            placeholder="Nomor Handphone"
            // onChange={(e) => setPassword(e.target.value)}
          />
          <p>Jenis Kendaraan</p>
          <input
            className="order-input"
            placeholder="Jenis Kendaraan"
            // onChange={(e) => setPassword(e.target.value)}
          />
          <p>Plat Nomor</p>
          <input
            className="order-input"
            placeholder="Plat Nomor"
            // onChange={(e) => setPassword(e.target.value)}
          />
          <p>Keterangan Order</p>
          <input
            className="order-input"
            placeholder="Keterangan Order"
            // onChange={(e) => setPassword(e.target.value)}
          />
          <p>Keluhan</p>
          <input
            className="order-input"
            placeholder="Keluhan"
            // onChange={(e) => setPassword(e.target.value)}
          />
          <p>Keluhan</p>
          <button>upload</button>
          <div className="button-generate-uniqueCode">
            <input
              className="contact-submit"
              type="submit"
              value="Generate Kode Unik"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Order;
