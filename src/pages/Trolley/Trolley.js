import React, { useState, useEffect } from "react";
import "./trolley.css";
import { useAuth } from "../../config/Auth";
import TokoBengkel from "../../api/TokoBengkel";
import { useParams } from "react-router-dom";
import { Card } from "antd";

const Trolley = () => {
  const { Id } = useParams();
  const { authTokens } = useAuth();
  const [Order, setOrder] = useState([]);

  useEffect(() => {
    const FetchTrolley = async () => {
      const resTrolley = await TokoBengkel.get("/api/cart/", {
        headers: { Authorization: `Bearer ${authTokens}` },
      });
      setOrder(resTrolley.data.data.cart);
    };

    FetchTrolley();
  }, []);

  const addQuantityItem = async () => {
    await TokoBengkel.put(`/api/cart/add/${Id}`, {
      headers: { Authorization: `Bearer ${authTokens}` },
    }).then((res) => {
      console.log(res);
    });
  };

  const reduceQuantityItem = async () => {
    await TokoBengkel.put(`/api/cart/reduce/${Id}`, {
      headers: { Authorization: `Bearer ${authTokens}` },
    }).then((res) => {
      console.log(res);
    });
  };

  const deleteQuantityItem = async () => {
    await TokoBengkel.delete(`/api/cart/${Id}`, {
      headers: { Authorization: `Bearer ${authTokens}` },
    }).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="trolley-container">
      <div className="trolley-title">
        <h1>TROLLEY</h1>
      </div>
      
      {Order.map((item) => (
        <Card key={item.Id} className="trolley-card">
          <div className="trolley-wrapper">
            <div className="trolley-image">
              <img
                style={{ width: 150 }}
                alt="gambar"
                src={item.ImageLink}
                className="img-fluid d-block"
              />
            </div>
            <div className="trolley-text-wrapper">
              <h1>{item.Name}</h1>
              <p>{item.Description}</p>
              <p>Merek : {item.Manufacture}</p>
              <p>Jumlah : {item.Quantity}</p>
              <div className="product-harga">
                <p>Harga</p>
                <h2>Rp {item.Price} </h2>
              </div>
              <div className="produt-buttonAddMinTrash">
                <button onClick={addQuantityItem} className="btn btn-plus">
                  <i className="fas fa-plus"></i>
                </button>
                <button onClick={reduceQuantityItem} className="btn btn-min">
                  <i className="fas fa-minus"></i>
                </button>
                <button onClick={deleteQuantityItem} className="btn btn-trash">
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Trolley;
