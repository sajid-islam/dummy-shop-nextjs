"use client";
import { setIsWishlistOpen } from "@/redux/wishlist-sidebar/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { MdDeleteOutline } from "react-icons/md";
import AddToCartBtn from "../AddToCartBtn/AddToCartBtn";

const wishlists = [
  {
    id: 78,
    title: "Apple MacBook Pro 14 Inch Space Grey",
    price: 1999.99,
    rating: 3.65,

    thumbnail:
      "https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/thumbnail.webp",
  },
  {
    id: 3,
    title: "Powder Canister",
    rating: 4.64,
    price: 14.99,
    thumbnail: "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp",
  },
  {
    id: 4,
    title: "Red Lipstick",
    rating: 4.36,
    price: 12.99,
    thumbnail: "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp",
  },
];

const WishlistSidebar = () => {
  const isWishlistOpen = useSelector((state) => state.wishlistSidebar.isWishlistOpen);
  const dispatch = useDispatch();
  console.log(isWishlistOpen);
  return (
    <aside>
      <div
        className={`fixed top-0 h-[100svh] w-5/6 lg:w-2/6 bg-white z-50 right-0 ${
          isWishlistOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 p-5`}
      >
        <div className="space-y-5">
          <div className="flex justify-between items-center border-b-2 pb-2">
            <h1 className="text-2xl font-semibold">Wishlist</h1>
            <IoMdClose
              onClick={() => dispatch(setIsWishlistOpen(false))}
              size={20}
              className="hover:cursor-pointer"
            />
          </div>
          <div className="flex flex-col gap-4">
            {wishlists.map((wishlist) => (
              <div key={wishlist.id} className="flex gap-2 items-center border-b-2 pb-4">
                <div className="border-2 p-1 w-fit">
                  <Image src={wishlist.thumbnail} width={100} height={100} alt={wishlist.title} />
                </div>
                <div className="space-y-2 flex-1">
                  <h6 className="text-xs md:text[16px]">{wishlist.title}</h6>
                  <Rating readOnly value={wishlist.rating} style={{ maxWidth: 80 }} />
                  <p className="text-xs md:text[16px] font-semibold">${wishlist.price}</p>
                </div>
                <div className="flex flex-col items-end gap-4">
                  <MdDeleteOutline size={20} />
                  <AddToCartBtn />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Backdrop */}
      <div
        onClick={() => dispatch(setIsWishlistOpen(false))}
        className={`bg-black/50 fixed inset-0 z-40 cursor-pointer ${
          isWishlistOpen ? "block" : "hidden"
        }`}
      />
    </aside>
  );
};

export default WishlistSidebar;
