"use client";

import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useGetBestCategoriesListQuery } from "@/redux/category/categoryApi";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpen } from "@/redux/filter-sidebar/filterSidebarSlice";

export default function FilterSidebar({ selectedCategory }) {
  const isOpen = useSelector((state) => state.filterSidebar.isOpen);
  const dispatch = useDispatch();

  const formatName = (name) => {
    return name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const { data: categories = [] } = useGetBestCategoriesListQuery();

  return (
    <div>
      <aside
        className={`p-4 space-y-6 bg-white h-screen md:h-auto w-72 md:w-auto fixed md:relative top-0 left-0 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } transition-transform duration-300`}
      >
        {/* Title */}
        <h2 className="text-lg font-semibold">FILTER</h2>

        {/* Price */}
        <div>
          <h3 className="text-sm font-medium mb-2">PRICE</h3>
          <div className="flex items-center gap-2">
            <Input placeholder="Min" className="w-20" />
            <span>-</span>
            <Input placeholder="Max" className="w-20" />
          </div>
        </div>

        {/* Availability */}
        <div>
          <h3 className="text-sm font-medium mb-2">AVAILABILITY</h3>
          <div className="flex flex-col space-y-2">
            <label className="flex items-center gap-2">
              <Checkbox /> <span>In Stock</span>
            </label>
            <label className="flex items-center gap-2">
              <Checkbox /> <span>Upcoming</span>
            </label>
            <label className="flex items-center gap-2">
              <Checkbox /> <span>Pre order</span>
            </label>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-sm font-medium mb-2">CATEGORIES</h3>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>{selectedCategory}</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-2 text-sm text-gray-600 pl-4">
                  {categories.map((category, idx) => (
                    <Link key={idx} href={`/category/${category}`}>
                      {formatName(category)}
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </aside>
      <div
        onClick={() => dispatch(setIsOpen(false))}
        className={`fixed inset-0 bg-black/50 z-40 md:hidden hover:cursor-pointer ${
          !isOpen && "hidden"
        }`}
      />
    </div>
  );
}
