import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getuser = createAsyncThunk("getdata", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  return response.json();
});


const CartSlice = createSlice({
  name: "userCart",
  initialState: {
    cartProducts:[],
    isLoading:false,
    isError:false,
    userCart: [],
    isLogin: false,
    userId: "",
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
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
  },
  extraReducers: {
    [getuser.pending]: (state) => {
      state.isLoading = true;
    },
    [getuser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cartProducts = action.payload;
    },
    [getuser.rejected]: (state) => {
      state.isError = true;
    },
  },
});
export const { addCart, removeCart, setIsLogin, setUserId, setUserDetails } =
  CartSlice.actions;

export default CartSlice.reducer;
