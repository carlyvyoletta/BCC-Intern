import "./layanan.css";
import { Card } from "antd";

const { Meta } = Card;

const Layanan = () => {
  return (
    <div className="layanan-container">
      <h1>Layanan</h1>
      <div className="layanan-items">
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
              <Meta
                title="Lorem Ipsum"
                description="www.instagram.com"
              />
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
              <Meta
                title="Lorem Ipsum"
                description="www.instagram.com"
              />
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
              <Meta
                title="Lorem Ipsum"
                description="www.instagram.com"
              />
            </Card>
          </div>
    </div>
  );
};

export default Layanan;
