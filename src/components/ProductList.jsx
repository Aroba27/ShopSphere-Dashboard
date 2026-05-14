import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleProducts = products.slice(startIndex, endIndex);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);
  const handleDelete = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  if (!products.length) {
    return (
      <div className="flex items-center justify-center h-75">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>

          <p className="text-sm text-gray-500">Loading products...</p>
        </div>
      </div>
    );
  }

  const headings = ["Product", "Name", "Brand", "Price", "Action"];

  return (
    <>
    
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <div className="grid grid-cols-[100px_2fr_1fr_1fr_1fr] bg-blue-50 text-blue-700 px-6 py-4 text-sm tracking-wider font-semibold">
          {headings.map((h) => (
            <h3 key={h}>{h}</h3>
          ))}
        </div>

        {visibleProducts.map((product) => (
          <div
            key={product.id}
            className="grid grid-cols-[100px_2fr_1fr_1fr_1fr] items-center px-4 py-3 border-t hover:bg-blue-100 transition duration-200"
          >
            <div>
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-14 h-14 object-cover rounded-lg border border-gray-100 shadow-sm"
              />
            </div>

            <p className="font-medium text-gray-900">{product.title}</p>

            <p className="text-gray-500 text-sm">{product.brand || "N/A"}</p>

            <p className="font-semibold text-gray-900">${product.price}</p>

            <div className="flex gap-2">
              <button className="px-3 py-1 text-sm rounded-md bg-blue-200 text-blue-700 hover:bg-blue-300 hover:text-blue-700 transition-all duration-75">
                Edit
              </button>
              <button
                onClick={() => {
                  if (window.confirm("Delete this product?")) {
                    handleDelete(product.id);
                  }
                }}
                className="px-3 py-1 text-sm bg-red-200 text-red-600 rounded-md hover:bg-red-300 hover:text-red-700 transition-all duration-75"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-2 mt-8 mb-8">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded-lg text-sm font-medium border border-gray-200 bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition disabled:opacity-40 disabled:hover:bg-white"
        >
          Prev
        </button>

        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-4 py-2 rounded-lg text-sm font-medium border transition
        ${
          currentPage === page
            ? "bg-blue-600 text-white border-blue-600 shadow-sm"
            : "bg-white text-gray-600 border-gray-200 hover:bg-blue-50 hover:text-blue-600"
        }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded-lg text-sm font-medium border border-gray-200 bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition disabled:opacity-40 disabled:hover:bg-white"
        >
          Next
        </button>
      </div>
    </>
   
  );
};

export default ProductList;
