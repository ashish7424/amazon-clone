import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { filter } from "lodash";
import { Button, Input, Row, Typography, message } from "antd";
import { LoadingOutlined, SearchOutlined } from "@ant-design/icons";
import ProductCard from "components/ProductCard";
// import ProductSlider from "components/ProductSlider";
import { routeNames } from "constants/pageRoutes.constants";
import { addCart, setSingleDetails } from "store/CartSlice/CartSlice";
import { getProducts, getProductsByCategories } from "store/CartSlice/actions";
import { shortLabel } from "utils/utils";

const { Text } = Typography;

function Products() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [products, setProducts] = useState([]);
  const [filterText, setFilterText] = useState("");
  const isLoading = useSelector((state) => state.Cart.isLoading);
  const Products = useSelector((state) => state.Cart.products);

  useEffect(() => {
    if (selectedCategory === "all") {
      dispatch(getProducts());
    } else {
      dispatch(getProductsByCategories(selectedCategory));
    }
    // eslint-disable-next-line
  }, [selectedCategory]);

  useEffect(() => {
    setProducts(Products);
  }, [Products]);

  const handleAddToCart = (item) => {
    dispatch(addCart(item));
    message.success("Added to Cart");
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
      {/* <ProductSlider/> */}
      <div className="flex-between">
        <Text className="category-title">PRODUCT OVERVIEW :</Text>
        <Input
          placeholder="Search Product..."
          className="search-input"
          value={filterText}
          onChange={SearchProductByCategory}
          prefix={<SearchOutlined />}
        />
      </div>
      <div className="category-container">
        <Button.Group className="category-group">
          <Button
            className={
              selectedCategory === "all" ? "active-btn btn-all" : "btn-all"
            }
            onClick={() => setSelectedCategory("all")}
          >
            All Products
          </Button>
          <Button
            className={
              selectedCategory === "men's clothing"
                ? "active-btn btn-all"
                : "btn-all"
            }
            onClick={() => setSelectedCategory("men's clothing")}
          >
            Men
          </Button>
          <Button
            className={
              selectedCategory === "women's clothing"
                ? "active-btn btn-all"
                : "btn-all"
            }
            onClick={() => setSelectedCategory("women's clothing")}
          >
            Women
          </Button>
          <Button
            className={
              selectedCategory === "electronics"
                ? "active-btn btn-all"
                : "btn-all"
            }
            onClick={() => setSelectedCategory("electronics")}
          >
            Electronics
          </Button>
          <Button
            className={
              selectedCategory === "jewelery" ? "active-btn btn-all" : "btn-all"
            }
            onClick={() => setSelectedCategory("jewelery")}
          >
            Jewelery
          </Button>
        </Button.Group>
        <div style={{ border: "1px solid #232f3e" }} />
      </div>
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
                  key={item.id}
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
