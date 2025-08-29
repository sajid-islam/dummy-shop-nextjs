"use client";
import { useGetProductsQuery } from "@/redux/product/productApi";
import ProductCard from "../ProductCard/ProductCard";
import { Button } from "../ui/button";
import { useState } from "react";

const JustForYou = () => {
  const [limit, setLimit] = useState(8);
  const { data = [] } = useGetProductsQuery({ limit, skip: 0 });

  return (
    <section className="space-y-10 mt-20">
      {/* Section Title */}
      <div className="text-center">
        <h2 className="text-3xl font-semibold">Just For You</h2>
      </div>
      {/* products */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {data?.products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {/* Show more button */}
      <div className="flex justify-center">
        <Button
          hidden={data.total === data.products?.length}
          onClick={() => setLimit((prev) => prev + 40)}
          variant="outline"
        >
          SHOW MORE
        </Button>
      </div>
    </section>
  );
};

export default JustForYou;
