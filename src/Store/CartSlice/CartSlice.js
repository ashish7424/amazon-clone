import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "userCart",
  initialState: {
    products: [],
    isLoading: false,
    userCart: [],
    singleDetail: {},
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    addCart: (state, action) => {
      state.userCart = [...state.userCart, action.payload];
    },
    removeCart: (state, action) => {
      state.userCart.splice(action.payload, 1);
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setSingleDetails: (state, action) => {
      state.singleDetail = action.payload;
    },
  },
});

export const {
  setProducts,
  addCart,
  removeCart,
  setSingleDetails,
  setLoading,
} = CartSlice.actions;

export default CartSlice.reducer;
