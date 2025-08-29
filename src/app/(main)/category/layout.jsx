"use client";
import ReduxProvider from "@/components/ReduxProvider/ReduxProvider";
import React from "react";

const CategoryLayout = ({ children }) => {
  return <ReduxProvider>{children}</ReduxProvider>;
};

export default CategoryLayout;
