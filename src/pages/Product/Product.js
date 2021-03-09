import "./product.css";
import { Input, Card } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

const { Search } = Input;

const Product = () => {
  return (
    <div className="produk-container">
      <div className="produk-wrapper">
        <h1>KATALOG PRODUK</h1>
        <Search className="product-searchbar" placeholder="cari produk" />
        <div className="product-items">
          <Link to="/trolley">
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://reparasimobil.com/wp-content/uploads/2020/11/c02f5b75d1-300x216.jpg"
                />
              }
            >
              <Meta title="Lorem Ipsum" description="www.instagram.com" />
            </Card>
          </Link>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://reparasimobil.com/wp-content/uploads/2020/11/c02f5b75d1-300x216.jpg"
              />
            }
          >
            <Meta title="Lorem Ipsum" description="www.instagram.com" />
          </Card>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://reparasimobil.com/wp-content/uploads/2020/11/c02f5b75d1-300x216.jpg"
              />
            }
          >
            <Meta title="Lorem Ipsum" description="www.instagram.com" />
          </Card>
        </div>
        <div className="product-items">
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://reparasimobil.com/wp-content/uploads/2020/11/c02f5b75d1-300x216.jpg"
              />
            }
          >
            <Meta title="Lorem Ipsum" description="www.instagram.com" />
          </Card>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://reparasimobil.com/wp-content/uploads/2020/11/c02f5b75d1-300x216.jpg"
              />
            }
          >
            <Meta title="Lorem Ipsum" description="www.instagram.com" />
          </Card>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://reparasimobil.com/wp-content/uploads/2020/11/c02f5b75d1-300x216.jpg"
              />
            }
          >
            <Meta title="Lorem Ipsum" description="www.instagram.com" />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Product;
