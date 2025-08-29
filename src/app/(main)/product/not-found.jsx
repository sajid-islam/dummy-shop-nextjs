export default function ProductNotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen text-center">
      <div>
        <h1 className="text-6xl font-bold text-gray-900">404</h1>
        <p className="mt-4 text-lg text-gray-600">Product not found</p>
        <p className="mt-2 text-gray-500">
          Sorry, we couldn’t find the product you’re looking for.
        </p>
      </div>
    </div>
  );
}
