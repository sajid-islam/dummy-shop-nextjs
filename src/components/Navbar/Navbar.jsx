import Image from "next/image";
import Link from "next/link";

import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { CiMenuBurger } from "react-icons/ci";
import { PiUserCircleThin } from "react-icons/pi";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  return (
    <nav className="flex gap-10 justify-between items-center px-2 md:px-5 h-16">
      {/* Logo */}
      <div className="flex items-center">
        <Image src={"/logo.png"} width={50} height={50} alt="logo" />
        <h1 className="text-xl md:text-2xl font-bold -m-1 whitespace-nowrap">ummy Shop</h1>
      </div>

      {/* Search bar */}
      <div className="relative hidden md:block flex-1 lg:flex-none lg:w-3/6">
        <SearchBar />
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
        <Link href="sign-in">
          <Button className="md:ml-4 hidden md:block">LOGIN</Button>
          <PiUserCircleThin size={25} className="md:hidden" />
        </Link>

        {/* Navbar toggle */}
        <button className="md:hidden">
          <CiMenuBurger size={20} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
