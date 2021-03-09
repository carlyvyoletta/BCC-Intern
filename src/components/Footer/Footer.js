import "./footer.css";
import { Row, Col, Image } from "antd";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-contents">
        <Row>
          <Col className="footer-content" span={6}>
            <h3>Home</h3>
            <p>Rekomendasi</p>
            <p>Kategori Produk</p>
            <p>Layanan</p>
          </Col>
          <Col className="footer-content" span={6}>
            <h3>Produk</h3>
            <p>Katalog</p>
          </Col>
          <Col className="footer-content" span={6}>
            <h3>Hubungi Kami</h3>
            <p>
              <i className="fab fa-instagram-square"></i>@Tbengkel
            </p>
            <p>
              <i className="fab fa-whatsapp-square"></i>1234567890
            </p>
            <p>
              <i className="fas fa-envelope"></i>TokoBeng@bengkel.com
            </p>
            <p>
              <i className="fab fa-facebook"></i>TokoBengkel
            </p>
          </Col>
          <Col className="footer-content" span={6}>
            <Image
              width={150}
              src="https://reparasimobil.com/wp-content/uploads/2020/11/c02f5b75d1-300x216.jpg"
            />
            <h3>TokoBengkel</h3>
            <p>Jl Malang, Kota Malang</p>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Footer;
