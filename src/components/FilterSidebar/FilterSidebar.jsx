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

export default function FilterSidebar({ selectedCategory }) {
  const formatName = (name) => {
    return name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const { data: categories = [] } = useGetBestCategoriesListQuery();
  console.log(categories);
  return (
    <aside className="p-4 space-y-6 bg-white">
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
  );
}
