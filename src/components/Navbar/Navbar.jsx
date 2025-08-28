import Image from "next/image";
import { Input } from "../ui/input";
import Link from "next/link";

import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const Navbar = () => {
  return (
    <nav className="flex gap-10 justify-between items-center px-5 h-16">
      {/* Logo */}
      <div className="flex items-center">
        <Image src={"/logo.png"} width={50} height={50} alt="logo" />
        <h1 className="text-xl md:text-2xl font-bold -m-1 whitespace-nowrap">ummy Shop</h1>
      </div>

      {/* Search bar */}
      <div className="relative flex-1 lg:flex-none lg:w-3/6">
        <CiSearch size={20} className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer" />
        <Input placeholder="Search for product" className="rounded-full placeholder:text-sm" />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        {/* Quick Accesses */}
        <Link
          href="/wishlist"
          className="relative flex gap-1 items-center text-muted-600 hover:text-black transition-colors duration-150"
        >
          <CiHeart size={25} />
          <span className="hidden lg:block">Wishlist</span>
          <Badge className="absolute -left-1 -top-1 h-4 min-w-4 text-[10px] rounded-full px-1 tabular-nums">
            2
          </Badge>
        </Link>
        <Link
          href="#"
          className="relative flex gap-1 items-center text-muted-600 hover:text-black transition-colors duration-150"
        >
          <CiShoppingCart size={25} />
          <span className="hidden lg:block">Cart</span>
          <Badge className="absolute -left-1 -top-1 h-4 min-w-4 text-[10px] rounded-full px-1 tabular-nums">
            8
          </Badge>
        </Link>

        {/* Login button */}
        <Button className="ml-4">LOGIN</Button>
      </div>
    </nav>
  );
};

export default Navbar;
