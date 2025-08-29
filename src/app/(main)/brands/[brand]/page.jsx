"use client";

import FilterSidebar from "@/components/FilterSidebar/FilterSidebar";
import Loader from "@/components/Loader/Loader";
import ProductCard from "@/components/ProductCard/ProductCard";
import { Button } from "@/components/ui/button";
import { setIsOpen } from "@/redux/filter-sidebar/filterSidebarSlice";
import { useGetSearchedProductsQuery } from "@/redux/product/productApi";
import { useParams } from "next/navigation";
import { CiFilter } from "react-icons/ci";
import { useDispatch } from "react-redux";

const BrandProductPage = () => {
  const { brand } = useParams();
  const dispatch = useDispatch();
  const { data = [], isLoading } = useGetSearchedProductsQuery({ text: brand });

  return (
    <>
      {" "}
      {isLoading ? (
        <Loader />
      ) : (
        <div className="max-w-[90rem] mx-auto px-5 mb-10">
          <div className="flex gap-10">
            <FilterSidebar selectedCategory={brand} />
            {/* products */}
            <div className="flex-1 mt-4 space-y-6">
              {/* Action */}
              <div className="flex justify-between">
                {/* Title */}
                <div>
                  <h2 className="text-xl font-semibold">{brand}</h2>
                  <p className="text-sm text-muted-600">{data.products.length} Item Found</p>
                </div>
                {/* Filter sidebar toggle button for small devices */}
                <div className="md:hidden">
                  <Button
                    onClick={() => dispatch(setIsOpen())}
                    variant="outline"
                    className="rounded-full"
                  >
                    {" "}
                    <CiFilter /> Filter
                  </Button>
                </div>
              </div>
              {/* category based products */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
                {data.products?.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}{" "}
    </>
  );
};

export default BrandProductPage;
