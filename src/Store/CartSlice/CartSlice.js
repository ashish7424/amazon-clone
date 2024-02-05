import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "userCart",
  initialState: {
    products: [],
    isLoading: false,
    userCart: [],
    singleDetail: {},
    cartTotal: null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },

    addCart: (state, action) => {
      // state.userCart = [...state.userCart, action.payload];
      let newItem = state.products.find(
        (item) => item.id === action.payload.id
      );
      newItem = { ...newItem, count: 1 };
      if (
        !state.userCart.some((cartproduct) => cartproduct.id === newItem.id)
      ) {
        state.userCart.push(newItem);
      } else {
        let newArr = state.userCart.map((cartproduct) =>
          cartproduct.id === newItem.id
            ? { ...cartproduct, count: cartproduct.count + 1 }
            : cartproduct
        );
        state.userCart = newArr;
      }
    },

    setCartTotal: (state, action) => {
      state.cartTotal = action.payload;
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
    incrementQty: (state, action) => {
      let newArr = state.userCart.map((cartproduct) =>
        cartproduct.id === action.payload.id
          ? { ...cartproduct, count: cartproduct.count + 1 }
          : cartproduct
      );
      state.userCart = newArr;
    },
    decrementQty: (state, action) => {
      let newArr = state.userCart.map((cartproduct) =>
        cartproduct.id === action.payload.id
          ? { ...cartproduct, count: cartproduct.count - 1 }
          : cartproduct
      );

      state.userCart = newArr;
    },
  },
});

export const {
  setProducts,
  addCart,
  removeCart,
  setSingleDetails,
  setLoading,
  incrementQty,
  decrementQty,
  setCartTotal,
} = CartSlice.actions;

export default CartSlice.reducer;
