import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import CartIcon from "assets/svg/CartIcon";
import { routeNames } from "constants/pageRoutes.constants";

const EmptyCartV1 = () => {
  const navigate = useNavigate();

  return (
    <div className="empty-cart">
      <div className="empty-content">
        <CartIcon />
        <div>
          <h2 className="empty-cart-title">Your Amazon Cart is empty</h2>
          <Button
            className="shop-now-btn"
            onClick={() => {
              navigate(routeNames.Signup);
            }}
          >
            Register Now
          </Button>
          <Button
            className="shop-now-btn"
            onClick={() => {
              navigate(routeNames.Login);
            }}
          >
            Log in to your account
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmptyCartV1;
