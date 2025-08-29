import AddWishListBtn from "@/components/AddWishListBtn/AddWishListBtn";
import ProductImageSlider from "@/components/ProductImageSlider/ProductImageSlider";
import PurchaseActions from "@/components/PurchaseActions/PurchaseActions";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ProductDetails = async ({ params }) => {
  const { id } = await params;

  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();

  const discountedPrice = product.price - (product.price / 100) * product.discountPercentage;
  const discountedPriceFormatted = Math.round(discountedPrice * 100) / 100;

  return (
    <div className="max-w-[90rem] mx-auto px-5 flex flex-col lg:flex-row items-center lg:items-start gap-5 mt-5">
      {/* Image Slider */}
      <ProductImageSlider images={product.images} title={product.title} />
      {/* Details */}
      <div className="space-y-5">
        {/* title */}
        <h1 className="text-3xl md:text-4xl font-semibold">{product.title}</h1>

        {/* Rating & stock */}
        <div className="flex gap-4 items-center">
          <Rating style={{ maxWidth: 90 }} readOnly value={product.rating} />
          <p
            className={`${
              product.availabilityStatus === "In Stock" ? "bg-muted-100 border" : " bg-red-400"
            } rounded-sm px-2 text-xs`}
          >
            {product.availabilityStatus}
          </p>
        </div>

        {/* Features */}
        <div className="flex gap-4 items-center text-xs md:text-[16px] ">
          <p>
            <span className="font-semibold">Brand:</span> {product.brand}
          </p>
          <p>
            <span className="font-medium">SKU:</span> {product.sku}
          </p>
          <span>|</span>
          <AddWishListBtn />
        </div>

        {/* description */}
        <p>{product.description}</p>
        <div className="flex gap-2 text-muted-600">
          {product.warrantyInformation} <span>|</span> {product.shippingInformation} <span>|</span>{" "}
          {product.returnPolicy}
        </div>

        {/* Price */}
        <div className="flex gap-2 text-xl font-semibold">
          <del className="text-muted-600">${product.price}</del>
          <span>${discountedPriceFormatted}</span>
        </div>
        {/* Purchase Action */}
        <PurchaseActions />
      </div>
    </div>
  );
};

export default ProductDetails;
