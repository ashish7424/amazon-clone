import { combineReducers } from "@reduxjs/toolkit";
import Cart from "./CartSlice/CartSlice";
import movies from "./MiniTV/slice";
import user from "./User/slice";

const rootReducer = combineReducers({
  movies,
  user,
  Cart,
});

export default rootReducer;
