import CartSidebar from "@/components/CartSidebar/CartSidebar";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import PrimaryNavbar from "@/components/PrimaryNavbar/PrimaryNavbar";
import ReduxProvider from "@/components/ReduxProvider/ReduxProvider";
import WishlistSidebar from "@/components/WishlistSidebar/WishlistSidebar";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <ReduxProvider>
        <header className="space-y-5">
          <Navbar />
          <PrimaryNavbar />
        </header>
        <WishlistSidebar />
        <CartSidebar />
      </ReduxProvider>
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
