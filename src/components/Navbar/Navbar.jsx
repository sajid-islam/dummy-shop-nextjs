import Image from "next/image";
import { Input } from "../ui/input";
import Link from "next/link";

import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { Button } from "../ui/button";

const quickAccesses = [
  {
    title: "Wishlist",
    icon: <CiHeart size={25} />,
    link: "/wishlist",
  },
  {
    title: "Cart",
    icon: <CiShoppingCart size={25} />,
    link: "/cart",
  },
];

const Navbar = () => {
  return (
    <nav className="flex gap-10 justify-between items-center px-5 h-16">
      <div className="flex items-center">
        <Image src={"/logo.png"} width={50} height={50} alt="logo" />
        <h1 className="text-xl md:text-2xl font-bold -m-1 whitespace-nowrap">ummy Shop</h1>
      </div>
      <div className="relative flex-1 lg:flex-none lg:w-3/6">
        <CiSearch size={20} className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer" />
        <Input placeholder="Search for product" className="rounded-full placeholder:text-sm" />
      </div>
      <div className="flex items-center gap-2">
        {quickAccesses.map((qa, idx) => (
          <Link
            key={idx}
            href={qa.link}
            className="flex gap-1 items-center text-muted-600 hover:text-black transition-colors duration-150"
          >
            {qa.icon}
            <span className="hidden lg:block">{qa.title}</span>
          </Link>
        ))}

        <Button className="ml-4">LOGIN</Button>
      </div>
    </nav>
  );
};

export default Navbar;
