import React from "react";
import { Button, Card, Col, Rate, Typography } from "antd";

const { Text } = Typography;

const ProductCard = ({ item, getSingleProductDetail, handleAddToCart }) => {
  return (
    <Col xl={6} xxl={6} sm={12} lg={8} xs={24} md={12}>
      <Card
        hoverable
        title={item.title}
        cover={
          <img
            alt="example"
            className="product-img"
            src={item.image}
            onClick={() => getSingleProductDetail(item)}
          />
        }
      >
        <Col>
          <Text className="card-span">Category : </Text>
          <Text className="cat-transform">{item.category} </Text>
        </Col>
        <Col>
          <Rate allowHalf defaultValue={item.rating.rate} disabled />
          {item.rating.rate}
        </Col>
        <Col>(Reviews : {item.rating.count})</Col>
        <br />
        <div className="add-cart-div">
          <Button
            onClick={() => handleAddToCart(item)}
            className="add-cart-btn"
          >
            Add to Cart
          </Button>
          <Text className="cart-price">₹ {item.price} </Text>
        </div>
      </Card>
    </Col>
  );
};

export default ProductCard;
