"use client";
import { useState } from "react";
import BuyNowBtn from "../BuyNowBtn/BuyNowBtn";
import AddToCartBtn from "../AddToCartBtn/AddToCartBtn";

const PurchaseActions = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="space-y-5">
      {/* Quantity Selector */}
      <div className="flex items-center border rounded-md w-fit">
        <button
          onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
          className="px-3 py-1 text-lg hover:cursor-pointer"
        >
          −
        </button>
        <span className="px-4">{quantity}</span>
        <button
          onClick={() => setQuantity(quantity + 1)}
          className="px-3 py-1 text-lg hover:cursor-pointer"
        >
          +
        </button>
      </div>
      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-3">
        <BuyNowBtn className="w-full" />
        <AddToCartBtn />
      </div>
    </div>
  );
};

export default PurchaseActions;
