"use client";
import Image from "next/image";
import { useState } from "react";
import "react-inner-image-zoom/lib/styles.min.css";

import InnerImageZoom from "react-inner-image-zoom";

const ProductImageSlider = ({ images, title }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  return (
    <div className="w-fit space-y-5">
      {/* Product image */}
      <div className="border-2 p-2 max-w-md mx-auto cursor-zoom-in">
        <InnerImageZoom
          src={selectedImage}
          zoomSrc={selectedImage}
          zoomScale={1}
          zoomType="hover"
          alt={title}
          width={400}
          height={400}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Thumb image*/}
      <div className="flex justify-center gap-2">
        {images.map((image, idx) => (
          <div
            onMouseEnter={() => setSelectedImage(image)}
            key={idx}
            className="border p-2 rounded-sm hover:cursor-pointer"
          >
            <Image src={image} width={50} height={50} alt={title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImageSlider;
