import { CiHeart } from "react-icons/ci";

const AddWishListBtn = () => {
  return (
    <button className="flex gap-1 items-center text-sm hover:cursor-pointer">
      <CiHeart size={20} />
      Wishlist
    </button>
  );
};

export default AddWishListBtn;
