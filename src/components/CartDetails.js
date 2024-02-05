import React from "react";
import { Button, Typography } from "antd";
import { DeleteOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import "./styles.css";

const { Text } = Typography;

const CartDetails = ({
  item,
  index,
  incrementCart,
  decrementCart,
  removeCartItem,
}) => {
  return (
    <div className="cart-products-main" key={item.id}>
      <div className="cart-products">
        <div className="cart-main-div">
          <div>
            <img alt="example" src={item.image} width={100} height={100} />
          </div>
          <div className="cart-sub-details">
            <Text className="product-label">{item.category}</Text>
            <Text className="product-label">{item.title}</Text>
            <Text className="product-label">₹ {item.price}</Text>
          </div>
        </div>
        <div>
          <Button
            type="text"
            shape="circle"
            className="delete-icon"
            onClick={() => removeCartItem(index)}
            icon={<DeleteOutlined style={{ color: "red" }} />}
          />
        </div>
      </div>
      <div className="flex-end">
        <div className="flex-column gap-10">
          <Text className="product-label">Quantity</Text>
          <div className="flex-align-center gap-20">
            <div className="counter-btn-grp">
              <Button
                type="text"
                shape="circle"
                className="counter-btn"
                icon={<MinusOutlined style={{ color: "#232f3e" }} />}
                onClick={() => decrementCart(item, index)}
              />
              <Text className="product-label">{item.count}</Text>
              <Button
                type="text"
                shape="circle"
                className="counter-btn"
                icon={<PlusOutlined style={{ color: "#232f3e" }} />}
                onClick={() => incrementCart(item)}
              />
            </div>
            <Text className="product-label">
              ₹ {(item.price * item.count).toFixed(2)}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
