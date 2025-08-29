"use client";
import ReduxProvider from "@/components/ReduxProvider/ReduxProvider";
import React from "react";

const CategoriesLayout = ({ children }) => {
  return <ReduxProvider>{children}</ReduxProvider>;
};

export default CategoriesLayout;
