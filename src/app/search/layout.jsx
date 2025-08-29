"use client";
import ReduxProvider from "@/components/ReduxProvider/ReduxProvider";
import React from "react";

const SearchLayout = ({ children }) => {
  return <ReduxProvider>{children}</ReduxProvider>;
};

export default SearchLayout;
