"use client";
import ReduxProvider from "@/components/ReduxProvider/ReduxProvider";

const HomeLayout = ({ children }) => {
  return <ReduxProvider>{children}</ReduxProvider>;
};

export default HomeLayout;
