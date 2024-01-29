import React from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Col, Dropdown, Image, Row } from "antd";
import {
  LogoutOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import amazon from "assets/png/amazon-removebg-preview.png";
import { routeNames } from "constants/pageRoutes.constants";
import { setIsLogin } from "store/User/slice";
import "./main.css";

function HeaderV1() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addToCart = useSelector((state) => state.Cart.userCart);
  const Details = useSelector((state) => state.user.userDetails);
  const LoggedIn = useSelector((state) => state.user.isLogin);

  const handleLogOut = () => {
    navigate(routeNames.Login);
    toast.success("Logout Successfully");
    dispatch(setIsLogin(false));
  };

  const handleNavigateAccount = () => {
    navigate(routeNames.MyAccount);
  };

  const items = [
    {
      label: (
        <div className="profile-setting" onClick={handleNavigateAccount}>
          <UserOutlined />
          My Account
        </div>
      ),
      key: "0",
    },
    {
      label: (
        <div className="profile-setting" onClick={handleLogOut}>
          <LogoutOutlined />
          Log out
        </div>
      ),
      key: "1",
    },
  ];

  return (
    <Row className="header">
      {LoggedIn ? (
        <Col span={3} className="flex-justify-center">
          <Dropdown
            className="dropdown-icon"
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            {Details.image ? (
              <Image
                src={Details.image}
                alt="image"
                preview={false}
                className="profile-img"
                width={60}
                height={60}
              />
            ) : (
              <UserOutlined style={{ fontSize: "40px", color: "#fff" }} />
            )}
          </Dropdown>
        </Col>
      ) : (
        <Col span={3} className="shop-link">
          <Link to={routeNames.Login} className="shop-link">
            Login{" "}
          </Link>
          /{" "}
          <Link to={routeNames.Signup} className="shop-link">
            Register
          </Link>
        </Col>
      )}{" "}
      <Col
        span={3}
        className="shop-link"
        onClick={() => navigate(routeNames.miniTV)}
      >
        Amazon Mini TV
      </Col>
      <Col span={12}>
        <Link to={routeNames.Home}>
          <img src={amazon} alt="amazon" width={120} height={50} />
        </Link>
      </Col>
      <Col span={4}>
        {LoggedIn ? (
          <p className="welcome-header">
            Hello, {Details.firstname} {Details.lastname}
          </p>
        ) : (
          <p className="welcome-header">Hello,Please Signin</p>
        )}
      </Col>
      <Col span={2}>
        <Link to={routeNames.Cart}>
          <ShoppingCartOutlined style={{ fontSize: "50px", color: "#fff" }} />
          <label className="itemnumber">{addToCart.length}</label>
        </Link>
      </Col>
    </Row>
  );
}

export default HeaderV1;
