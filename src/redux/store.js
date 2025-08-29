import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "./navbar/navbarSlice";
import { categoryApi } from "./category/categoryApi";

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(categoryApi.middleware),
});
