import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { filter, isEmpty } from "lodash";
import { Button, Dropdown, Input, Row, message } from "antd";
import {
  DownOutlined,
  LoadingOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import ProductCard from "components/ProductCard";
import { routeNames } from "constants/pageRoutes.constants";
import { addCart, setSingleDetails } from "store/CartSlice/CartSlice";
import { getProducts, getProductsByCategories } from "store/CartSlice/actions";
import { shortLabel } from "utils/utils";

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

  const onClick = ({ key }) => {
    setData(key);
    if (key === "all") {
      dispatch(getProducts());
    } else {
      dispatch(getProductsByCategories(key));
    }
  };

  const handleAddToCart = (item) => {
    dispatch(addCart(item));
    message.success("Added to Cart")
  };

  const SearchProductByCategory = (e) => {
    setFilterText(e.target.value);
  };

  const getSingleProductDetail = (item) => {
    dispatch(setSingleDetails(item));
    navigate(routeNames.SingleProduct);
  };

  const productDataFilter = filter(products, (item) => {
    if (filterText && filterText.length >= 1) {
      return shortLabel(item.category).includes(shortLabel(filterText));
    }
    return products;
  });

  return (
    <div className="product-main">
      <div className="product-filter">
        <Dropdown menu={{ items, onClick }} trigger={["click"]}>
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

      {data !== "all" && !isEmpty(data) && (
        <div>
          <label className="dropdown-key">{data}</label>
          <p className="result">
            {`Showing ${products?.length} Results :(${data})`}
          </p>
        </div>
      )}

      {isLoading ? (
        <div className="spinner">
          <LoadingOutlined style={{ color: "#232f3e" }} />
        </div>
      ) : (
        <Row gutter={[20, 20]}>
          {productDataFilter &&
            productDataFilter.map((item) => {
              return (
                <ProductCard
                  item={item}
                  getSingleProductDetail={getSingleProductDetail}
                  handleAddToCart={handleAddToCart}
                />
              );
            })}
        </Row>
      )}
    </div>
  );
}

export default Products;
