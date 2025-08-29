"use client";
import ReduxProvider from "@/components/ReduxProvider/ReduxProvider";
import React from "react";

const BrandsLayout = ({ children }) => {
  return <ReduxProvider>{children}</ReduxProvider>;
};

export default BrandsLayout;
