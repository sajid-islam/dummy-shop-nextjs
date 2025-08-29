import AddWishListBtn from "@/components/AddWishListBtn/AddWishListBtn";
import ProductImageSlider from "@/components/ProductImageSlider/ProductImageSlider";
import PurchaseActions from "@/components/PurchaseActions/PurchaseActions";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import ProductNotFound from "../not-found";

const ProductDetails = async ({ params }) => {
  const { id } = await params;

  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();

  if (!response.ok) {
    ProductNotFound();
  }

  const discountedPrice = product.price - (product.price / 100) * product.discountPercentage;
  const discountedPriceFormatted = Math.round(discountedPrice * 100) / 100;

  return (
    <div className="max-w-[90rem] mx-auto px-5 mb-20">
      {/* Product Details */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-5 mt-5">
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
            {product.warrantyInformation} <span>|</span> {product.shippingInformation}{" "}
            <span>|</span> {product.returnPolicy}
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

      {/* Customer Reviews */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-6 pb-4 border-b-2">Customer Reviews</h2>

        <div className="space-y-6">
          {product.reviews.map((review, index) => (
            <div key={index} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
              {/* Reviewer Info */}
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">{review.reviewerName}</h3>
                <span className="text-sm text-gray-500">
                  {new Date(review.date).toLocaleDateString()}
                </span>
              </div>

              {/* Rating */}
              <Rating style={{ maxWidth: 100 }} value={review.rating} readOnly />

              {/* Comment */}
              <p className="mt-2 text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
