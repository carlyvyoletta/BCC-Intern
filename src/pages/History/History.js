import React, { useState, useEffect } from "react";
import "./history.css";
import { Card } from "antd";
import TokoBengkel from "../../api/TokoBengkel";

const History = () => {
  const [History, setHistory] = useState([]);

  useEffect(() => {
    const FetchProduct = async () => {
      const resProduct = await TokoBengkel.get("/api/order/");
      setHistory(resProduct.data.data);
    };

    FetchProduct();
  }, []);

  return (
    <div className="history-container">
      {History.map((item) => (
        <div>
          <Card key={item.Id} className="history-card">
            <div className="history-wrapper">
              <div className="history-image">
                <img
                  style={{ width: 150 }}
                  alt="gambar"
                  src={item.ImageLink}
                  className="img-fluid d-block"
                />
              </div>
              <div className="history-text-wrapper">
                <h1>{item.Name}</h1>
                <p>{item.Description}</p>
                <p>Merek : {item.Manufacture}</p>
                <p>Jumlah : {item.Quantity}</p>
                <div className="product-harga">
                  <p>Harga</p>
                  <h2>Rp {item.Price} </h2>
                </div>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default History;
