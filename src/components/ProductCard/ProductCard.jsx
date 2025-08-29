import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FiHeart, FiRepeat, FiEye, FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <Card
      className={`relative rounded-lg border-[1px] border-slate-200 hover:border-black overflow-hidden`}
    >
      {/* Image area */}
      <div className="relative bg-white p-4 flex items-center justify-center">
        <Link href={`/product/${product.id}`}>
          <Image
            width={150}
            height={150}
            src={product.images[0]}
            alt={product.title}
            className="w-full object-contain rounded-md"
          />
        </Link>

        {/* right vertical action icons */}
        <div className="absolute right-3 top-0 flex flex-col gap-3 text-slate-600">
          <button
            aria-label="Add to wishlist"
            className="w-9 h-9 bg-white border border-slate-100 rounded-full shadow-sm flex items-center justify-center hover:bg-slate-50"
          >
            <FiHeart />
          </button>
        </div>
      </div>

      <CardContent className="px-4 pt-2 pb-0">
        <Link href={`/product/${product.id}`}>
          <h3 className="text-sm font-medium text-slate-800 truncate" title={product.title}>
            {product.title}
          </h3>
        </Link>
        <div className="mt-2">
          <span className="text-lg font-semibold text-slate-900">${product.price}</span>
        </div>
      </CardContent>

      <CardFooter className="px-4 pt-2 pb-4">
        <Button
          variant="ghost"
          className="w-full rounded-md border border-slate-100 bg-muted-50 hover:bg-muted-100 gap-2 justify-center"
        >
          <FiShoppingCart />
          <span className="md:ml-2 text-sm font-medium">Add to cart</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
