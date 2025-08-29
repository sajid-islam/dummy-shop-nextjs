"use client";
import { setIsCartOpen } from "@/redux/cart-sidebar/cartSidebarSlice";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { CiShoppingCart } from "react-icons/ci";

const CartSidebar = () => {
  const isCartOpen = useSelector((state) => state.cartSidebar.isCartOpen);
  const dispatch = useDispatch();
  console.log(isCartOpen);
  return (
    <aside>
      <div
        className={`fixed top-0 h-[100svh] w-5/6 lg:w-2/6 bg-white z-50 right-0 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 p-5`}
      >
        <div className="space-y-5">
          <div className="flex justify-between items-center border-b-2 pb-2">
            <h1 className="text-2xl font-semibold">Cart</h1>
            <IoMdClose
              onClick={() => dispatch(setIsCartOpen(false))}
              size={20}
              className="hover:cursor-pointer"
            />
          </div>
          <div className="flex flex-col h-full justify-center items-center">
            <CiShoppingCart size={100} />
            <p className="font-semibold">Your cart is empty</p>
          </div>
        </div>
      </div>
      {/* Backdrop */}
      <div
        onClick={() => dispatch(setIsCartOpen(false))}
        className={`bg-black/50 fixed inset-0 z-40 cursor-pointer ${
          isCartOpen ? "block" : "hidden"
        }`}
      />
    </aside>
  );
};

export default CartSidebar;
