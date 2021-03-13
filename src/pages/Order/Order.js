import "./order.css";
import React, { useState } from "react";
import { useAuth } from "../../config/Auth";
import TokoBengkel from "../../api/TokoBengkel";
import { Upload, message, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const Order = () => {
  const { authTokens } = useAuth();

  const [Nama, setNama] = useState("");
  const [NoHP, setNoHP] = useState("");
  const [JenisKendaraan, setJenisKendaraan] = useState("");
  const [PlatNomor, setPlatNomor] = useState("");
  const [KetOrder, setKetOrder] = useState("");
  const [Keluhan, setKeluhan] = useState("");

  const handleOrder = async (e) => {
    e.preventDefault();
    await TokoBengkel.post(
      "/api/order/new",
      {
        name: Nama,
        no_hp: NoHP,
        transportation_type: JenisKendaraan,
        licence_plate: PlatNomor,
        order_description: KetOrder,
        complaint: Keluhan,
      },
      {
        headers: { Authorization: `Bearer ${authTokens}` },
      }
    );
  };

  return (
    <div className="order-container">
      <div className="order-title">
        <h1>ORDER</h1>
      </div>
      <div className="order-form-wrapper">
        <form className="order-form" onSubmit={handleOrder}>
          <p>Nama Lengkap</p>
          <input
            className="order-input"
            placeholder="Nama Lengkap"
            onChange={(e) => setNama(e.target.value)}
          />
          <p>Nomor Handphone</p>
          <input
            className="order-input"
            placeholder="Nomor Handphone"
            onChange={(e) => setNoHP(e.target.value)}
          />
          <p>Jenis Kendaraan</p>
          <input
            className="order-input"
            placeholder="Jenis Kendaraan"
            onChange={(e) => setJenisKendaraan(e.target.value)}
          />
          <p>Plat Nomor</p>
          <input
            className="order-input"
            placeholder="Plat Nomor"
            onChange={(e) => setPlatNomor(e.target.value)}
          />
          <p>Keterangan Order</p>
          <input
            className="order-input"
            placeholder="Keterangan Order"
            onChange={(e) => setKetOrder(e.target.value)}
          />
          <p>Keluhan</p>
          <input
            className="order-input"
            placeholder="Keluhan"
            onChange={(e) => setKeluhan(e.target.value)}
          />
          <p className="upload-STNK-txt">Upload Foto STNK</p>
          <Upload {...props}>
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
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
