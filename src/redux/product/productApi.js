import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/products" }),
  endpoints: (build) => ({
    getProducts: build.query({
      query: ({ limit = 8, skip = 0 }) => `?limit=${limit}&skip=${skip}`,
    }),
    getSearchedProducts: build.query({
      query: ({ text }) => `/search?q=${text}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetSearchedProductsQuery } = productApi;
