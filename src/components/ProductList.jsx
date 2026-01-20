import products from "../data/products"
import ProductCard from "./ProductCard"

function ProductList() {
  return (
    <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  )
}

export default ProductList
