import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import CartIcon from "assets/svg/CartIcon";
import { routeNames } from "constants/pageRoutes.constants";

const EmptyCart = () => {
  const navigate = useNavigate();

  return (
    <div className="empty-cart">
      <div className="empty-content">
        <div>
          <CartIcon />
        </div>
        <div>
          <h2 className="empty-cart-title">Your Amazon Cart is empty</h2>
          <Button
            className="shop-now-btn"
            onClick={() => {
              navigate(routeNames.Home);
            }}
          >
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
