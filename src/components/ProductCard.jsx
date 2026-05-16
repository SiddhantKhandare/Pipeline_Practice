// function ProductCard({ product }) {
//   return (
//     <div className="transition border rounded-lg shadow hover:shadow-lg">
//       <img
//         src={product.image}
//         alt={product.title}
//         className="object-cover w-full h-48 rounded-t-lg"
//       />

//       <div className="p-4">
//         <h2 className="text-lg font-semibold">{product.title}</h2>

//         <p className="mt-1 text-sm text-gray-600">
//           {product.description}
//         </p>

//         <p className="mt-2 font-bold text-blue-600">
//           ₹ {product.price}
//         </p>
//       </div>
//     </div>
//   )
// }

// export default ProductCard











function ProductCard({ product }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-[0_10px_40px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(59,130,246,0.35)]">
      {/* Glow Effect */}
      <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20 group-hover:opacity-100" />

      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="object-cover object-center w-full transition-transform duration-700 h-72 group-hover:scale-110"
        />

        {/* Floating Badge */}
        <span className="absolute px-4 py-1 text-xs font-bold tracking-widest text-white uppercase rounded-full shadow-lg left-4 top-4 bg-gradient-to-r from-pink-500 to-orange-500">
          Trending
        </span>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-5">
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-xl font-bold tracking-wide text-white">
            {product.title}
          </h2>

          <div className="px-3 py-1 text-sm font-semibold rounded-full bg-white/10 text-cyan-300 backdrop-blur-md">
            ★ 4.9
          </div>
        </div>

        <p className="mt-3 text-sm leading-relaxed line-clamp-2 text-zinc-400">
          {product.description}
        </p>

        {/* Bottom Row */}
        <div className="flex items-center justify-between mt-6">
          <div>
            <p className="text-xs tracking-widest uppercase text-zinc-500">
              Price
            </p>

            <p className="text-3xl font-extrabold text-white">
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
                ₹ {product.price}
              </span>
            </p>
          </div>

          <button className="px-5 py-3 font-semibold text-white transition-all duration-300 shadow-lg rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 shadow-cyan-500/30 hover:scale-105 hover:from-blue-500 hover:to-purple-600">
            Buy Now
          </button>
        </div>
      </div>

      {/* Animated Border */}
      <div className="absolute inset-0 border pointer-events-none rounded-3xl border-white/10" />
    </div>
  );
}

export default ProductCard;
