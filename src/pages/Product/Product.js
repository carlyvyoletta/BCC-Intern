import "./product.css";
import { Row, Col } from "antd";
import { Input, Card } from "antd";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import TokoBengkel from "../../api/TokoBengkel";

const { Meta } = Card;

const { Search } = Input;

const Product = () => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    const FetchProduct = async () => {
      const resProduct = await TokoBengkel.get("/api/product/");
      setProducts(resProduct.data.data);
    };

    FetchProduct();
  }, []);

  return (
    <div className="produk-container">
      <div className="produk-title">
        <h1>
          KATALOG <span className="title-produk">PRODUK</span>
        </h1>
        <Search className="product-searchbar" placeholder="cari produk" />
      </div>
      <div className="produk-wrapper">
        <Row gutter={[16, 16]}>
          {Products.map((product) => (
            <Col key={product.ID} span={8}>
              <div className="product-items">
                <Link to={`/productdetail/${product.ID}`}>
                  <Card className="product-card"
                    hoverable
                    style={{ width: 240 }}
                    cover={<img className="productkatalog-img" alt="example" src={product.image_link} />}
                  >
                    <Meta
                      title={product.name}
                      description={product.description}
                    />
                  </Card>
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Product;
