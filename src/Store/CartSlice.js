import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "userCart",
  initialState: {
    userCart: [],
    data: {},
    isLogin: false,
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
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});
export const { addCart, removeCart, setIsLogin, setData } = CartSlice.actions;
export default CartSlice.reducer;
