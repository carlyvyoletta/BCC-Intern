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
          <Search placeholder="Kode Unik" enterButton="Cari" size="large" />
        </div>
        <div className="tracking-table">
          <table>
            <tr>
              <th>Nama</th>
              <td>xxx</td>
            </tr>
            <tr>
              <th>Jenis Kendaraan</th>
              <td>xxx</td>
            </tr>
            <tr>
              <th>Nomor Plat</th>
              <td>xxx</td>
            </tr>
            <tr>
              <th>Waktu Order</th>
              <td>xxx</td>
            </tr>
            <tr>
              <th>Harga Total</th>
              <td>xxx</td>
            </tr>            <tr>
              <th>Status Kendaraan</th>
              <td>xxx</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tracking;
