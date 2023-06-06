import "./main.css";
import React from "react";
import { toast } from "react-toastify";
import { Col, Dropdown, Row } from "antd";
import amazon1 from "../PNG/Amazon logo.png";
import { setIsLogin } from "../Store/CartSlice";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  LogoutOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addToCart = useSelector((state) => state.Cart.userCart);
  const Details = useSelector((state) => state.Cart.userDetails);
  const LoggedIn = useSelector((state) => state.Cart.isLogin);

  const onLogOut = () => {
    navigate("/signin");
    toast.success("Logout Successfully");
    dispatch(setIsLogin(false));
  };
  const myaccount = () => {
    navigate("/myaccount");
  };

  const items = [
    {
      label: (
        <div className="profile-setting" onClick={myaccount}>
          <UserOutlined style={{ marginRight: "5px" }} />
          My Account
        </div>
      ),
      key: "0",
    },
    {
      label: (
        <div className="profile-setting" onClick={onLogOut}>
          <LogoutOutlined style={{ marginRight: "5px" }} />
          Log out
        </div>
      ),
      key: "1",
    },
  ];
  return (
    <div>
      <Row className="header">
        {LoggedIn ? (
          <Col span={2} style={{ display: "flex", justifyContent: "center" }}>
            <Dropdown
              className="dropdown-icon"
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <UserOutlined style={{ fontSize: "40px", color: "black" }} />
            </Dropdown>
          </Col>
        ) : (
          <Col span={2}>
            <Link to="/signin" className="shop-link">
              Login / Register
            </Link>
          </Col>
        )}{" "}
        <Col span={3}></Col>
        <Col span={14}>
          <Link to="/">
            <img src={amazon1} alt="amazon" width={180} height={60} />
          </Link>
        </Col>
        <Col span={3}>
          {LoggedIn ? (
            <p style={{ textTransform: "capitalize" }}>
              Hello, {Details.firstname} {Details.lastname}
            </p>
          ) : (
            <p>Hello,Please Signin</p>
          )}
        </Col>
        <Col span={2}>
          <Link to="/cart">
            <ShoppingCartOutlined
              style={{ fontSize: "50px", color: "black" }}
            />
            <label className="itemnumber">{addToCart.length}</label>
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
