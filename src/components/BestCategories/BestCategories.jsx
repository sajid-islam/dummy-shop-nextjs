"use client";
import { useGetBestCategoriesListQuery } from "@/redux/category/categoryApi";
import Link from "next/link";
import { Button } from "../ui/button";

const BestCategories = () => {
  const formatName = (name) => {
    return name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  const { data: categories = [] } = useGetBestCategoriesListQuery();

  return (
    <section className="space-y-10 mt-20">
      {/* Section Title */}
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-3xl font-semibold">Best Categories</h2>
        <Link href="/categories">
          <Button variant="outline" className="rounded-full cursor-pointer">
            VIEW ALL CATEGORIES
          </Button>
        </Link>
      </div>
      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
    </section>
  );
};

export default BestCategories;
