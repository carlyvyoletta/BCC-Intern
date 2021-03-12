import "./history.css";

const History = () => {
  return (
    <div className="history-container">
      <div className="history-title">
        <h1>History</h1>
      </div>
      <div className="history-form-wrapper">
        <form className="history-form">
          <p>Nama</p>
          <input
            className="history-input"
            placeholder="Nama"
            // onChange={(e) => setEmail(e.target.value)}
          />
          <p>Nomor Handphone</p>
          <input
            className="history-input"
            placeholder="Nomor Handphone"
            // onChange={(e) => setPassword(e.target.value)}
          />
          <p>Jenis Kendaraan</p>
          <input
            className="history-input"
            placeholder="Jenis Kendaraan"
            // onChange={(e) => setPassword(e.target.value)}
          />
          <p>Plat Nomor</p>
          <input
            className="history-input"
            placeholder="Plat Nomor"
            // onChange={(e) => setPassword(e.target.value)}
          />
          <p>Keterangan history</p>
          <input
            className="history-input"
            placeholder="Keterangan history"
            // onChange={(e) => setPassword(e.target.value)}
          />
          <p>Keluhan</p>
          <input
            className="history-input"
            placeholder="Keluhan"
            // onChange={(e) => setPassword(e.target.value)}
          />
          <p>Keluhan</p>
          <button>
            <i className="fas fa-upload"></i> upload
          </button>
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

export default History;
