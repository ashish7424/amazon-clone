import "./main.css";
import React from "react";
import { Button, Col, Row } from "antd";
import cartitem from "../PNG/cartimg.svg";
import { useNavigate } from "react-router";
import { removeCart } from "../Store/CartSlice";
import { DeleteOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";

function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.Cart.userCart);

  const removedata = (index) => {
    dispatch(removeCart(index));
  };
  var element = 0;
  for (let i = 0; i < items.length; i++) {
    element = element + items[i].price;
  }
  const total = element.toFixed(2);
  const proceedToBuy = () => {
    navigate("/billingdetails", { state: { data: items, element: total } });
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="cartproducts">
        <div className="cart-title">Cart :</div>
        <br />
        {items.length === 0 ? (
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
        ) : (
          items.map((item, index) => {
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

        {items.length === 0 ? (
          <div></div>
        ) : (
          <div className="cart-total">
            <div className="empty-div"></div>
            <div>
              <Row justify="space-between" className="row-total">
                <Col span={8} className="col-key">
                  {items.length === 1 ? "Total Item " : "Total Items"}
                </Col>
                <Col span={6} className="col-total">
                  {items.length}
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
                Proceed to Buy ({items.length}
                {items.length === 1 ? " item" : " items"})
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
