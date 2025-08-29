import BannerSlider from "@/components/BannerSlider/BannerSlider";
import Navbar from "@/components/Navbar/Navbar";
import PrimaryNavbar from "@/components/PrimaryNavbar/PrimaryNavbar";
import SearchBar from "@/components/SearchBar/SearchBar";
import React from "react";

const HomePage = () => {
  return (
    <div className="space-y-5 md:space-y-10">
      <Navbar />
      <PrimaryNavbar />
      <div className="md:hidden px-5 relative">
        <SearchBar />
      </div>
      <BannerSlider />
    </div>
  );
};

export default HomePage;
