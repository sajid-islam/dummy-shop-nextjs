"use client";
import ProductCard from "@/components/ProductCard/ProductCard";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader/Loader";
import FilterSidebar from "@/components/FilterSidebar/FilterSidebar";
import { Button } from "@/components/ui/button";
import { CiFilter } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpen } from "@/redux/filter-sidebar/filterSidebarSlice";

const CategoryPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const formatName = (name) => {
    return name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://dummyjson.com/products/category/${category}`);
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products by category", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="max-w-[90rem] mx-auto px-5 mb-10">
          <div className="flex gap-10">
            <FilterSidebar selectedCategory={category} />
            {/* products */}
            <div className="flex-1 mt-4 space-y-6">
              {/* Action */}
              <div className="flex justify-between">
                {/* Title */}
                <div>
                  <h2 className="text-xl font-semibold">{formatName(category)}</h2>
                  <p className="text-sm text-muted-600">{products.length} Item Found</p>
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
                {products?.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryPage;
