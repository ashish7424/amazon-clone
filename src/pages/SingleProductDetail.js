import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Col, Image, Rate, Typography } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { routeNames } from "constants/pageRoutes.constants";
import { addCart } from "store/CartSlice/CartSlice";

const { Text } = Typography;

const SingleProductDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productDetail = useSelector((state) => state.Cart.singleDetail);

  const addToCart = () => {
    dispatch(addCart(productDetail));
  };

  return (
    <div className="single-product-main ">
      <div>
        <Button
          shape="circle"
          type="text"
          icon={<ArrowLeftOutlined />}
          onClick={() => navigate(routeNames.Home)}
        />
      </div>
      {productDetail && (
        <div className="single-product">
          <div>
            <Image
              src={productDetail.image}
              alt={productDetail.category}
              width={300}
              height={300}
              preview={false}
            />
          </div>
          <div className="single-details">
            <Col>
              <Text className="card-span">Category : </Text>
              <Text className="card-detail">{productDetail.category}</Text>
            </Col>
            <Col>
              <Text className="card-span">Description : </Text>
              <Text className="card-detail">{productDetail.description}</Text>
            </Col>
            <Col>
              <Text className="card-span">Price : </Text>
              <Text className="card-detail">
                {productDetail.price || "0"} ₹
              </Text>
            </Col>
            <Col>
              <Rate
                allowHalf
                defaultValue={productDetail.rating.rate}
                disabled
              />
              {productDetail.rating.rate}
            </Col>
            <Col>(Reviews : {productDetail.rating.count})</Col>
            <Button
              onClick={addToCart}
              className="add-cart-btn single-cart-btn"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProductDetail;
