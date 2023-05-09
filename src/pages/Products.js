import { Button, Card, Col, Rate, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../Store/CartSlice";
import { TailSpin } from "react-loader-spinner";

function Products() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    setLoading(true);
    await fetch("https://fakestoreapi.com/products").then((res) => {
      res.json().then((result) => {
        setProducts(result);
      });
    });
    setLoading(false);
  };

  const addcart = (item) => {
    dispatch(addCart(item));
  };
  return (
    <div>
      {loading ? (
        <div className="spinner">
          <TailSpin />
        </div>
      ) : (
        <Row gutter={[20, 20]} className="cards" >
          {products.map((item, index) => {
            return (
              <Col key={index} xl={6} xxl={6} sm={12} lg={6} xs={12}>
                <Card
                  hoverable
                  title={item.title}
                  cover={
                    <img
                      alt="example"
                      className="product-img"
                      src={item.image}
                    />
                  }
                >
                  <Col>
                    <span className="card-span">
                      Category:
                    </span>
                    {item.category}
                  </Col>
                  <Col>
                    <span className="card-span">
                      Price:
                    </span>
                    {item.price} ₹
                  </Col>
                  <Col>
                    <Rate allowHalf defaultValue={item.rating.rate} disabled />
                    {item.rating.rate}
                  </Col>
                  <Col>(Reviews:{item.rating.count})</Col>
                  <br />
                  <Button onClick={() => addcart(item)} className="add-cart-btn">Add to Cart</Button>
                </Card>
              </Col>
            );
          })}
        </Row>
      )}
    </div>
  );
}

export default Products;
