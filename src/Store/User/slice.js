import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    isLogin: false,
    userDetails: {},
    userList: [],
  },
  reducers: {
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    setUserList: (state, action) => {
      state.userList = [...state.userList, action.payload];
    },
    editDetails: (state, action) => {
      const arr = state.userList;
      for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i].id) === Number(action.payload.index)) {
          arr[i] = {
            ...action.payload.values,
            id: action.payload.index,
            image: action.payload.image,
          };
          state.userList = [...state.userList];
        }
      }
    },
  },
});

export const {
  setIsLogin,
  setUserDetails,
  setUserList,
  editDetails,
} = UserSlice.actions;

export default UserSlice.reducer;
