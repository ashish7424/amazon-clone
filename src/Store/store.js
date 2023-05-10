import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
  key: "root",
  storage,
};

const persistedreducer = persistReducer(persistConfig, CartReducer);
const store = configureStore({
  reducer: {
    Cart: persistedreducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
export default store;
