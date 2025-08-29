"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

import sliderImage1 from "@/images/sliderImage/Electronics.jpg";
import sliderImage2 from "@/images/sliderImage/Beauty.jpg";
import sliderImage3 from "@/images/sliderImage/Fashion.jpg";

import { Pagination, Autoplay, Navigation } from "swiper/modules";

const BannerSlider = () => {
  return (
    <>
      <Swiper
        pagination={true}
        navigation={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Pagination, Autoplay, Navigation]}
      >
        <SwiperSlide>
          <Image src={sliderImage1} alt="slider image 1" className="rounded-md" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={sliderImage2} alt="slider image 2" className="rounded-md" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={sliderImage3} alt="slider image 2" className="rounded-md w-full" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BannerSlider;
