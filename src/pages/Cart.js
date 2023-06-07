import "./main.css";
import React from "react";
import { Button, Col, Row } from "antd";
import cartitem from "../PNG/cartimg.svg";
import { useNavigate } from "react-router";
import { removeCart } from "../Store/CartSlice";
import { DeleteOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addToCart = useSelector((state) => state.Cart.userCart);
  const isLoggedin = useSelector((state) => state.Cart.isLogin);

  const removedata = (index) => {
    dispatch(removeCart(index));
  };
  var element = 0;
  for (let i = 0; i < addToCart.length; i++) {
    element = element + addToCart[i].price;
  }
  const total = element.toFixed(2);
  const proceedToBuy = () => {
    if (isLoggedin) {
      navigate("/billingdetails", { state: { element: total } });
    }else{
      toast.warning("Please Login!")
      navigate("/signin" );
    }
  };
  return (
    <div className="cartproducts">
      <div className="main-div">
        <div className="cart-title">Cart :</div>
        <br />
        {addToCart.length === 0 && isLoggedin ? (
          <div className="empty-cart">
            <div className="empty-content">
              <div>
                <img src={cartitem} alt="cart-item" width={300} height={300} />
              </div>
              <div>
                <h2 className="empty-cart-title">Your Amazon Cart is empty</h2>
                <Button
                  className="shop-now-btn"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        ) : addToCart.length === 0 && !isLoggedin ? (
          <div className="empty-cart">
            <div className="empty-content">
              <div>
                <img src={cartitem} alt="cart-item" width={300} height={300} />
              </div>
              <div>
                <h2 className="empty-cart-title">Your Amazon Cart is empty</h2>
                <Button
                  className="shop-now-btn"
                  onClick={() => {
                    navigate("/signup");
                  }}
                >
                  Register Now
                </Button>
                <Button
                  className="shop-now-btn"
                  onClick={() => {
                    navigate("/signin");
                  }}
                >
                  Log in to your account
                </Button>
              </div>
            </div>
          </div>
        ) : (
          addToCart.map((item, index) => {
            return (
              <div className="cart-row" key={index}>
                <Row className="cartitem" gutter={[20, 20]}>
                  <Col span={6}>
                    <img
                      alt="example"
                      src={item.image}
                      width={100}
                      height={100}
                    />
                  </Col>
                  <Col span={6}> {item.title}</Col>
                  <Col span={6}>
                    <span style={{ fontSize: "18px", fontWeight: "bolder" }}>
                      Price:
                    </span>
                    ₹ {item.price}
                  </Col>
                  <Col>
                    <DeleteOutlined
                      onClick={() => removedata(index)}
                      className="delete-icon"
                    />
                  </Col>
                </Row>
              </div>
            );
          })
        )}

        {addToCart.length === 0 ? (
          <div></div>
        ) : (
          <div className="cart-total">
            <div className="empty-div"></div>
            <div>
              <Row justify="space-between" className="row-total">
                <Col span={8} className="col-key">
                  {addToCart.length === 1 ? "Total Item " : "Total Items"}
                </Col>
                <Col span={6} className="col-total">
                  {addToCart.length}
                </Col>
              </Row>
            </div>
            <Row justify="space-between" className="row-total">
              <Col span={8} className="col-key">
                SubTotal
              </Col>
              <Col span={6} className="col-total">
                ₹ {total}
              </Col>
            </Row>
            <div className="buy-btn-div">
              <Button className="buy-btn" onClick={proceedToBuy}>
                Proceed to Buy ({addToCart.length}
                {addToCart.length === 1 ? " item" : " items"})
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
