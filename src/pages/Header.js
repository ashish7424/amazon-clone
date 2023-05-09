import { Col, Row } from "antd";
import React from "react";
import "./main.css";
import amazon1 from "../PNG/Amazon logo.png";
import { Link } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

function Header() {
  const data = useSelector((state) => state.Cart.userCart);
  return (
    <div>
      <Row className="header">
        <Col span={2}>
          <Link to="/" className="shop-link">
            Shop
          </Link>
        </Col>
        <Col span={2}>
          <Link to="/signin" className="shop-link">
            My Account
          </Link>
        </Col>
        <Col span={18}>
          <Link to="/">
            <img src={amazon1} alt="amazon" width={180} height={60} />
          </Link>
        </Col>
        <Col span={2}>
          <Link to="/cart">
            <ShoppingCartOutlined
              style={{ fontSize: "50px", color: "black" }}
            />
            <label className="itemnumber">{data.length}</label>
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
