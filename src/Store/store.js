import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import rootReducer from "./rootReducer";

const persistConfig = {
  key: "root",
  storage,
};

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const persistedreducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedreducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(middlewares),
});

export default store;
