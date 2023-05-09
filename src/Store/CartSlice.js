import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "userCart",
  initialState: {
    userCart: [],
  },
  reducers: {
    addCart: (state, action) => {
      state.userCart = [...state.userCart, action.payload];
    },
    removeCart: (state, action) => {
      state.userCart.splice(action.payload, 1);
    },
  },
});
export const { addCart, removeCart } = CartSlice.actions;
export default CartSlice.reducer;
