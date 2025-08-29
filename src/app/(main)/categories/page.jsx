"use client";
import Loader from "@/components/Loader/Loader";
import { useGetAllCategoriesListQuery } from "@/redux/category/categoryApi";
import Link from "next/link";

const CategoriesPage = () => {
  const formatName = (name) => {
    return name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  const { data: categories, isLoading } = useGetAllCategoriesListQuery();
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-[90rem] mx-auto px-5 my-10">
          {/* Categories */}
          {categories.map((category, idx) => (
            <Link
              key={idx}
              href={`/category/${category}`}
              className="block rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm hover:bg-primary-50 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-gray-800">{formatName(category)}</h3>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default CategoriesPage;
