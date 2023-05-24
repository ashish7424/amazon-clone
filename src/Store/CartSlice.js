import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "userCart",
  initialState: {
    userCart: [],
    isLogin: false,
    userId: "",
    userDetails:{}
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
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
  },
});
export const { addCart, removeCart, setIsLogin, setUserId ,setUserDetails} =
  CartSlice.actions;
export default CartSlice.reducer;
