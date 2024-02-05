import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Col, Image, Rate, Typography } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { routeNames } from "constants/pageRoutes.constants";
import { addCart, setSingleDetails } from "store/CartSlice/CartSlice";

const { Text } = Typography;

const SingleProductDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productDetail = useSelector((state) => state.Cart.singleDetail);

  const addToCart = () => {
    dispatch(addCart(productDetail));
  };

  const handleNavigateHome = () => {
    navigate(routeNames.Home);
    dispatch(setSingleDetails(null));
  };

  return (
    <div className="single-product-main ">
      <div>
        <Button
          shape="circle"
          type="text"
          icon={<ArrowLeftOutlined />}
          onClick={handleNavigateHome}
        />
      </div>

      {productDetail && (
        <div className="single-product">
          <div className="product-image-main">
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
              <Text className="product-title">{productDetail.title}</Text>
            </Col>
            <Col>
              <Text className="card-span">Category : </Text>
              <Text className="card-detail cat-transform">
                {productDetail.category}
              </Text>
            </Col>
            <Col>
              <Text className="card-span">Description : </Text>
              <Text className="card-detail">{productDetail.description}</Text>
            </Col>
            <Col>
              <Text className="card-span">Price : </Text>
              <Text className="card-detail">{productDetail.price} ₹</Text>
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
