import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { filter, isEmpty } from "lodash";
import {
  Button,
  Card,
  Col,
  Dropdown,
  Input,
  Rate,
  Row,
  Typography,
} from "antd";
import {
  DownOutlined,
  LoadingOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { routeNames } from "constants/pageRoutes.constants";
import { addCart, setSingleDetails } from "store/CartSlice/CartSlice";
import { getProducts, getProductsByCategories } from "store/CartSlice/actions";
import { shortLabel } from "utils/utils";

const { Text } = Typography;

function Products() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState("");
  const [products, setProducts] = useState([]);
  const [filterText, setFilterText] = useState("");
  const isLoading = useSelector((state) => state.Cart.isLoading);
  const Products = useSelector((state) => state.Cart.products);

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

  useEffect(() => {
    dispatch(getProducts());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setProducts(Products);
  }, [Products]);

  const onClick = async ({ key }) => {
    setData(key);
    if (key === "all") {
      dispatch(getProducts());
    } else {
      dispatch(getProductsByCategories(key));
    }
  };

  const handleAddToCart = (item) => {
    dispatch(addCart(item));
  };

  const SearchProductByCategory = (e) => {
    setFilterText(e.target.value);
  };

  const productDataFilter = filter(products, (item) => {
    if (filterText && filterText.length >= 1) {
      return shortLabel(item.category).includes(shortLabel(filterText));
    }
    return products;
  });

  return (
    <div>
      <div className="product-filter">
        <Dropdown
          menu={{
            items,
            onClick,
          }}
          trigger={["click"]}
        >
          <Button className="categories-btn">
            {data || "Categories"}
            <DownOutlined />
          </Button>
        </Dropdown>
        <Input
          placeholder="Search Product..."
          className="search-input"
          value={filterText}
          onChange={SearchProductByCategory}
          prefix={<SearchOutlined />}
        />
      </div>

      {data !== "all" && !isEmpty(data) ? (
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
          {productDataFilter &&
            productDataFilter.map((item, index) => {
              return (
                <Col key={index} xl={6} xxl={6} sm={12} lg={8} xs={24} md={12}>
                  <Card
                    hoverable
                    title={item.title}
                    cover={
                      <img
                        alt="example"
                        className="product-img"
                        src={item.image}
                        onClick={() => {
                          dispatch(setSingleDetails(item));
                          navigate(routeNames.SingleProduct);
                        }}
                      />
                    }
                  >
                    <Col>
                      <Text className="card-span">Category : </Text>
                      {item?.category}
                    </Col>
                    <Col>
                      <Text className="card-span">Price : </Text>
                      {item?.price || "0"} ₹
                    </Col>
                    <Col>
                      <Rate
                        allowHalf
                        defaultValue={item.rating.rate}
                        disabled
                      />
                      {item.rating.rate}
                    </Col>
                    <Col>(Reviews : {item.rating.count})</Col>
                    <br />
                    <Button
                      onClick={() => handleAddToCart(item)}
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
