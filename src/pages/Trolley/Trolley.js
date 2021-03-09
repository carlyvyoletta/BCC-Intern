import "./Trolley.css";
import { Image } from "antd";
import { InputNumber } from "antd";

function onChange(value) {
  console.log("changed", value);
}

const Trolley = () => {
  return (
    <div className="trolley-container">
      <div className="trolley-wrapper">
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
          <p>Harga</p>
          <h2>Rp 500.000</h2>
          <p>Jumlah</p>
          <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
          <button>Beli Sekarang</button>
        </div>
        <div className="trolley-image">
          <Image
            width={500}
            src="https://reparasimobil.com/wp-content/uploads/2020/11/c02f5b75d1-300x216.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Trolley;
