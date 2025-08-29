"use client";
import { Select, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";

import { BsShop } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import BranchDialog from "../BranchDialog/BranchDialog";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpen } from "@/redux/navbar/navbarSlice";

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
  const isOpen = useSelector((state) => state.navbar.isOpen);
  const dispatch = useDispatch();

  return (
    <>
      {/* For large Devices */}
      <nav className="px-5 hidden md:flex justify-between items-center ">
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

      {/*  For small devices*/}
      <aside className="md:hidden">
        <div
          className={`fixed top-0 h-[100svh] w-72 bg-white z-50 left-0 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 p-5`}
        >
          {/* Navigation Links */}
          <div className="space-y-5">
            <Select>
              <SelectTrigger className="w-full bg-muted-50 text-black hover:cursor-pointer">
                <SelectValue placeholder="Categories" />
              </SelectTrigger>
              <SelectContent className="p-2">
                <div className="flex flex-col gap-2">
                  {categories.map((category, idx) => (
                    <Link
                      href={`/category/${category.title}`}
                      key={idx}
                      className="bg-muted-50 px-2 rounded-sm"
                    >
                      {category.title.charAt(0).toUpperCase() + category.title.slice(1)}
                    </Link>
                  ))}
                </div>
              </SelectContent>
            </Select>
            <div className="flex flex-col gap-5">
              {navLinks.map((navLink) => (
                <Link key={navLink.id} href={navLink.link}>
                  <p className="text-muted-600 hover:text-black transition-colors duration-150">
                    {navLink.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Branch Toggle */}
          <div className="mt-5">
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
        </div>
        {/* Backdrop */}
        <div
          onClick={() => dispatch(setIsOpen(false))}
          className={`bg-black/50 fixed inset-0 z-40 cursor-pointer ${isOpen ? "block" : "hidden"}`}
        />
      </aside>
    </>
  );
};

export default PrimaryNavbar;
