"use client";

import Loader from "@/components/Loader/Loader";
import Link from "next/link";
import { useEffect, useState } from "react";

const BrandsPage = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBrandsList = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://dummyjson.com/products?limit=0&select=brand");
        const data = await response.json();
        const uniqueBrands = [...new Set(data.products.map((p) => p.brand).filter(Boolean))];
        setBrands(uniqueBrands);
      } catch (error) {
        console.error("Error fetching brands list", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBrandsList();
  }, []);
  return (
    <>
      {" "}
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-[90rem] mx-auto px-5 my-10">
          {/* Brands */}
          {brands.map((brand, idx) => (
            <Link
              key={idx}
              href={`/brands/${brand}`}
              className="block rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm hover:bg-primary-50 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-gray-800">{brand}</h3>
            </Link>
          ))}
        </div>
      )}{" "}
    </>
  );
};

export default BrandsPage;
