import "./Tracking.css";
import { Input } from "antd";

const { Search } = Input;

const Tracking = () => {
  return (
    <div className="tracking-container">
      <div className="tracking-contents">
        <h1>Tracking</h1>
        <p>Masukkan Kode</p>
        <div className="tracking-searchbar">
          <Search
            placeholder="Kode Unik"
            enterButton="Cari"
            size="large"
          />
        </div>
      </div>
    </div>
  );
};

export default Tracking;
