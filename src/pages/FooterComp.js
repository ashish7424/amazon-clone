import "./main.css";
import React from "react";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import amazon from "../PNG/amazon-removebg-preview.png";
import {
  FacebookOutlined,
  InstagramOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

function FooterComp() {
  return (
    <div className="footer-div">
      <Row className="foooter-row" justify="center">
        <Col
          className="sub-col"
          md={24}
          lg={12}
          sm={24}
          xs={24}
          xl={6}
          xxl={6}
        >
          <Col className="amazon-col">
            <img src={amazon} alt="amazon-logo" height={60} width={120} />
            <Col className="amazon-title">
              High-quality products that are both beautiful and meaningful.
            </Col>
            <Col>
              <Row>
                <Col span={3}>
                  <Link
                    to="https://www.instagram.com/"
                    target="_blank"
                    className="social-link"
                  >
                    <InstagramOutlined className="social-icon" />
                  </Link>
                </Col>
                <Col span={3}>
                  <Link
                    to="https://www.facebook.com/"
                    target="_blank"
                    className="social-link"
                  >
                    <FacebookOutlined className="social-icon" />
                  </Link>
                </Col>
                <Col span={3}>
                  <Link
                    to="https://www.whatsapp.com/"
                    target="_blank"
                    className="social-link"
                  >
                    <WhatsAppOutlined className="social-icon" />
                  </Link>
                </Col>
              </Row>
            </Col>
          </Col>
        </Col>
        <Col
          className="sub-col"
          md={8}
          lg={12}
          sm={24}
          xs={24}
          xl={3}
          xxl={2}
        >
          <Col className="quick">QUICK LINKS</Col>
          <Col className="quick-links">Our Philosophy</Col>
          <Col className="quick-links">Sustainability</Col>
          <Col className="quick-links">Privacy Policy</Col>
          <Col className="quick-links">Terms of Service</Col>
        </Col>
        <Col
          className="sub-col"
          md={8}
          lg={12}
          sm={24}
          xs={24}
          xl={2}
          xxl={2}
        >
          <Col className="order">Order Info</Col>
          <Col className="order-info">FAQ</Col>
          <Col className="order-info">Shipping</Col>
          <Col className="order-info">Returns</Col>
          <Col className="order-info">Size Charts</Col>
        </Col>
        <Col
          className="letter"
          md={8}
          lg={12}
          sm={24}
          xs={24}
          xl={4}
          xxl={4}
        >
          <Col className="newsletter">NEWSLETTER</Col>
          <Col>Join our newsletter for 10% off your first order.</Col>
        </Col>
      </Row>
      <div className="footer-title">
        © 1996-2023, Amazon.com, Inc. or its affiliates
      </div>
    </div>
  );
}

export default FooterComp;
