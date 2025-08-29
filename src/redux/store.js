import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "./navbar/navbarSlice";
import { categoryApi } from "./category/categoryApi";
import { productApi } from "./product/productApi";

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categoryApi.middleware).concat(productApi.middleware),
});
