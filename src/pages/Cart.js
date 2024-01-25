import React from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Button, Col, Row } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import EmptyCart from "components/EmptyCart";
import EmptyCartV1 from "components/EmptyCartV1";
import { routeNames } from "constants/pageRoutes.constants";
import { removeCart } from "store/CartSlice/CartSlice";
import "./main.css";

function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addToCart = useSelector((state) => state.Cart.userCart);
  const isLoggedin = useSelector((state) => state.user.isLogin);

  const removeCartItem = (index) => {
    dispatch(removeCart(index));
  };

  var element = 0;
  for (let i = 0; i < addToCart.length; i++) {
    element = element + addToCart[i].price;
  }
  const total = element.toFixed(2);

  const proceedToBuy = () => {
    if (isLoggedin) {
      navigate(routeNames.BillingDetails, { state: { element: total } });
    } else {
      toast.warning("Please Login!");
      navigate(routeNames.Login);
    }
  };

  return (
    <div className="cartproducts ">
      <div className="main-cart">
        <div className="cart-title">Cart :</div>
        {addToCart.length === 0 && isLoggedin ? (
          <EmptyCart />
        ) : addToCart.length === 0 && !isLoggedin ? (
          <EmptyCartV1 />
        ) : (
          <div>
            {addToCart.map((item, index) => {
              return (
                <div className="cart-row" key={index}>
                  <Row
                    className="cartitem"
                    style={{
                      borderBottom:
                        index < addToCart.length - 1 ? "1px solid #42444a" : "",
                    }}
                    gutter={[20, 20]}
                  >
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
                        onClick={() => removeCartItem(index)}
                        className="delete-icon"
                      />
                    </Col>
                  </Row>
                </div>
              );
            })}
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
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
