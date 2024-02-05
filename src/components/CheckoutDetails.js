import React from "react";
import { Button, Col, Row, Typography } from "antd";
import "./styles.css";

const { Text } = Typography;

const CheckoutDetails = ({ counter, proceedToBuy, total }) => {
  return (
    <div className="cart-total">
      <div>
        <Row justify="space-between" className="row-total">
          <Col span={8} className="col-key">
            {counter === 1 ? "Total Item " : "Total Items"}
          </Col>
          <Col span={6} className="col-total">
            <Text className="cart-sub-total"> {counter}</Text>
          </Col>
        </Row>
      </div>
      <Row justify="space-between" className="row-total">
        <Col span={8} className="col-key">
          SubTotal
        </Col>
        <Col span={6} className="col-total">
          <Text className="cart-sub-total">₹ {total}</Text>
        </Col>
      </Row>
      <div className="buy-btn-div">
        <Button className="buy-btn" onClick={proceedToBuy}>
          Proceed to Buy ({counter}
          {counter === 1 ? " item" : " items"})
        </Button>
      </div>
    </div>
  );
};

export default CheckoutDetails;
