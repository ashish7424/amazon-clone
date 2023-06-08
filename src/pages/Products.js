/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { addCart, getuser } from "../Store/CartSlice";
import { DownOutlined, LoadingOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Dropdown, Rate, Row } from "antd";

function Products() {
  const items = [
    {
      label: "All",
      key: "all",
    },
    {
      label: "Electronics",
      key: "electronics",
    },
    {
      label: "Jewelery",
      key: "jewelery",
    },
    {
      label: "Men's Clothing",
      key: "men's clothing",
    },
    {
      label: "Women's Clothing",
      key: "women's clothing",
    },
  ];

  const dispatch = useDispatch();
  const [data, setData] = useState("");
  const [products, setProducts] = useState([]);
  const cartProduct = useSelector((state) => state.Cart.cartProducts);
  const isLoading=useSelector((state)=>state.Cart.isLoading)

  useEffect(() => {
    dispatch(getuser());
  }, []);

  const onClick = async ({ key }) => {
    setData(key);
    if (key === "all") {
         dispatch(getuser());
    } else {
      await fetch(`https://fakestoreapi.com/products/category/${key}`).then(
        (res) => {
          res.json().then((result) => {
            setProducts(result);
          });
        }
      );
    }
  }; 

  const addcart = (item) => {
    dispatch(addCart(item));
  };
  return (
    <div>
      <div style={{ margin: "100px 0 0 50px" }}>
        <Dropdown
          menu={{
            items,
            onClick,
          }}
          trigger={["click"]}
        >
          <Button
            className="categories-btn"
            style={{ textTransform: "capitalize" }}
          >
            {data || "Categories"}
            <DownOutlined />
          </Button>
        </Dropdown>
      </div>

      {data !== "all" && data !== "" ? (
        <div>
          <label className="dropdown-key">{data}</label>
          <p className="result">
            {`Showing ${products?.length} Results :(${data})`}
          </p>
        </div>
      ) : (
        ""
      )}

      {isLoading ? (
        <div className="spinner">
          <LoadingOutlined />
        </div>
      ) : (
        <Row gutter={[20, 20]} className="cards">
          {cartProduct.map((item, index) => {
            return (
              <Col key={index} xl={6} xxl={6} sm={12} lg={8} xs={12} md={12}>
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
                    <span className="card-span">Category : </span>
                    {item?.category}
                  </Col>
                  <Col>
                    <span className="card-span">Price : </span>
                    {item?.price || "0"} ₹
                  </Col>
                  <Col>
                    <Rate allowHalf defaultValue={item.rating.rate} disabled />
                    {item.rating.rate}
                  </Col>
                  <Col>(Reviews : {item.rating.count})</Col>
                  <br />
                  <Button
                    onClick={() => addcart(item)}
                    className="add-cart-btn"
                  >
                    Add to Cart
                  </Button>
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
