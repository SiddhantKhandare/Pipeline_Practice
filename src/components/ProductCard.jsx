function ProductCard({ product }) {
  return (
    <div className="transition border rounded-lg shadow hover:shadow-lg">
      <img
        src={product.image}
        alt={product.title}
        className="object-cover w-full h-48 rounded-t-lg"
      />

      <div className="p-4">
        <h2 className="text-lg font-semibold">{product.title}</h2>

        <p className="mt-1 text-sm text-gray-600">
          {product.description}
        </p>

        <p className="mt-2 font-bold text-blue-600">
          ₹ {product.price}
        </p>
      </div>
    </div>
  )
}

export default ProductCard
