import "./Rekomendasi.css";
import { Carousel, Card } from "antd";

const { Meta } = Card;

const Rekomendasi = () => {
  return (
    <div className="rekomendasi-container">
      <h1>Rekomendasi</h1>
      <div className="carousel-wrapper">
        <Carousel autoplay>
          <div className="carousel-items">
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
          <div className="carousel-items">
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
        </Carousel>
      </div>
    </div>
  );
};

export default Rekomendasi;
