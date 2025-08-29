import { toast } from "sonner";
import { Button } from "../ui/button";
import { FiShoppingCart } from "react-icons/fi";
import { usePathname } from "next/navigation";

const AddToCartBtn = () => {
  const pathname = usePathname();
  const handleAddToCart = () => {
    toast.success("Item added to cart");
  };
  return (
    <Button
      onClick={handleAddToCart}
      variant="ghost"
      className={`${
        pathname.split("/")[1] === "product" ? "w-full md:w-fit" : "w-full"
      } rounded-md border border-slate-100 bg-muted-50 hover:bg-muted-100 gap-2 justify-center`}
    >
      <FiShoppingCart />
      <span className="md:ml-2 text-sm font-medium">Add to cart</span>
    </Button>
  );
};

export default AddToCartBtn;
