import { Select, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";

import { BsShop } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import BranchDialog from "../BranchDialog/BranchDialog";

const categories = [
  { title: "food" },
  { title: "fashion" },
  { title: "beauty" },
  { title: "fragrances" },
  { title: "furniture" },
  { title: "groceries" },
];

const navLinks = [
  { id: "1", name: "Home", link: "/" },
  { id: "2", name: "Brand", link: "/brand" },
  { id: "3", name: "All Categories", link: "/categories" },
];

const PrimaryNavbar = () => {
  return (
    <nav className="px-5 flex justify-between items-center">
      {/* Navigation Links */}
      <div className="flex gap-5 items-center">
        <Select>
          <SelectTrigger className="w-[180px] rounded-full bg-muted-50 text-black hover:cursor-pointer">
            <SelectValue placeholder="Categories" />
          </SelectTrigger>
          <SelectContent className="p-2">
            <div className="flex flex-col gap-2">
              {categories.map((category, idx) => (
                <Link
                  href={`/category/${category.title}`}
                  key={idx}
                  className="hover:bg-muted-50 px-2 rounded-sm"
                >
                  {category.title.charAt(0).toUpperCase() + category.title.slice(1)}
                </Link>
              ))}
            </div>
          </SelectContent>
        </Select>
        {navLinks.map((navLink, idx) => (
          <Link key={navLink.id} href={navLink.link}>
            <p className="text-muted-600 hover:text-black transition-colors duration-150">
              {navLink.name}
            </p>
          </Link>
        ))}
      </div>

      {/* Branch Toggle */}
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="flex ">
              <BsShop size={20} />
              <span className="mt-0.5">Dummy - Rajshahi Branch</span>
              <IoIosArrowDown />
            </Button>
          </DialogTrigger>
          <BranchDialog />
        </Dialog>
      </div>
    </nav>
  );
};

export default PrimaryNavbar;
