import ProductImageSlider from "@/components/ProductImageSlider/ProductImageSlider";

const ProductDetails = async ({ params }) => {
  const { id } = await params;

  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();

  console.log(product);
  return (
    <div className="max-w-[90rem] mx-auto px-5">
      <ProductImageSlider images={product.images} title={product.title} />
    </div>
  );
};

export default ProductDetails;
