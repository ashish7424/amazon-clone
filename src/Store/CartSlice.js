import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "userCart",
  initialState: {
    userCart: [],
    isLogin: false,
    userDetails: {},
  },
  reducers: {
    addCart: (state, action) => {
      state.userCart = [...state.userCart, action.payload];
    },
    removeCart: (state, action) => {
      state.userCart.splice(action.payload, 1);
    },
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    setuserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
  },
});
export const { addCart, removeCart, setIsLogin, setuserDetails } =
  CartSlice.actions;
export default CartSlice.reducer;
