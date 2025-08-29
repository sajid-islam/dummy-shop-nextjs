import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { usePathname } from "next/navigation";

const BuyNowBtn = () => {
  const pathname = usePathname();
  const handleBuy = () => {
    toast.success("This is a demo shop you don't buy anything");
  };
  return (
    <Button
      onClick={handleBuy}
      variant="ghost"
      className={`${
        pathname.split("/")[1] === "product" ? "w-full md:w-fit" : "w-full"
      }  rounded-md border border-slate-100 bg-muted-50 hover:bg-muted-100 gap-2 justify-center`}
    >
      <HiOutlineShoppingBag />
      <span className="md:ml-2 text-sm font-medium">BUY NOW</span>
    </Button>
  );
};

export default BuyNowBtn;
