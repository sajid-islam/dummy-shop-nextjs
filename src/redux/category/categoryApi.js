import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/products/category-list" }),
  endpoints: (build) => ({
    getBestCategoriesList: build.query({
      query: () => "/",
      transformResponse: (response) => response.slice(0, 6),
    }),
    getAllCategoriesList: build.query({
      query: () => "/",
    }),
  }),
});

export const { useGetBestCategoriesListQuery, useGetAllCategoriesListQuery } = categoryApi;
