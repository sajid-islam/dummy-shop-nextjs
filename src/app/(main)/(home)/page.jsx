import BannerSlider from "@/components/BannerSlider/BannerSlider";
import BestCategories from "@/components/BestCategories/BestCategories";
import JustForYou from "@/components/JustForYou/JustForYou";
import Navbar from "@/components/Navbar/Navbar";
import PrimaryNavbar from "@/components/PrimaryNavbar/PrimaryNavbar";
import SearchBar from "@/components/SearchBar/SearchBar";
import React from "react";

const HomePage = () => {
  return (
    <div className="space-y-5 md:space-y-10 mt-5 md:mt10 mb-20">
      <div className="max-w-[90rem] mx-auto px-5 space-y-5 md:space-y-10">
        <div className="md:hidden relative">
          <SearchBar />
        </div>
        <BannerSlider />
        <BestCategories />
        <JustForYou />
      </div>
    </div>
  );
};

export default HomePage;
