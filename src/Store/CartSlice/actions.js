import { toast } from "react-toastify";
import { setLoading, setProducts } from "./CartSlice";

export const getProducts = () => (dispatch) => {
  try {
    dispatch(setLoading(true));
    fetch("https://fakestoreapi.com/products").then((res) => {
      res.json().then((result) => {
        dispatch(setProducts(result));
        dispatch(setLoading(false));
      });
    });
  } catch (error) {
    toast.error(error.message);
    dispatch(setLoading(false));
  }

};

export const getProductsByCategories = (key) => (dispatch) => {
  try {
    dispatch(setLoading(true));
    fetch(`https://fakestoreapi.com/products/category/${key}`).then((res) => {
      res.json().then((result) => {
        dispatch(setProducts(result));
        dispatch(setLoading(false));
      });
    });
  } catch (error) {
    dispatch(setLoading(false));
    toast.error(error.message);
  }
};

