import "./productdetail.css";
import { Card, Image } from "antd";
import { InputNumber } from "antd";
import { Link, useParams } from "react-router-dom";
import TokoBengkel from "../../api/TokoBengkel";
import React, { useState, useEffect } from "react";
import { useAuth } from "../../config/Auth";

const ProductDetail = () => {
  const { id } = useParams();
  const { authTokens } = useAuth();

  const [getIdProduct, setgetIdProduct] = useState({
    name: "",
    description: "",
    manufacture: "",
    price: 0,
    image_link: "",
  });

  useEffect(() => {
    const FetchProduct = async () => {
      const resProduct = await TokoBengkel.get(`/api/product/${id}`);
      setgetIdProduct({
        name: resProduct.data.data.name,
        description: resProduct.data.data.description,
        manufacture: resProduct.data.data.manufacture,
        price: resProduct.data.data.price,
        image_link: resProduct.data.data.image_link,
      });
    };

    FetchProduct();
  }, []);

  const [quantity, setQuantity] = useState(1);

  const addItem = async () => {
    await TokoBengkel.post(
      "/api/cart/new",
      {
        product_id: parseInt(id),
        quantity: quantity,
      },
      {
        headers: { Authorization: `Bearer ${authTokens}` },
      }
    );
  };

  return (
    <div className="pd-container">
      <div className="pd-title">
        <h1>PRODUCT</h1>
      </div>
      <div className="pd-wrapper">
        <Card className="pd-card">
          <div className="pd-image">
            <Image width={300} src={getIdProduct.image_link} />
          </div>
          <div className="pd-text-wrapper">
            <h1>{getIdProduct.name}</h1>
            <p>{getIdProduct.description}</p>
            <p>Merek: {getIdProduct.manufacture}</p>
            <p>Harga : Rp{getIdProduct.price}</p>
            <p className="pd-jumlah-txt">Jumlah</p>
            <InputNumber
              className="pd-inputQuantity"
              min={1}
              max={10}
              defaultValue={3}
              onChange={(value) => setQuantity(value)}
            />
            <button onClick={addItem}>Tambah ke troli</button>
            <Link to="/order">
              <button>Beli Sekarang</button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProductDetail;
