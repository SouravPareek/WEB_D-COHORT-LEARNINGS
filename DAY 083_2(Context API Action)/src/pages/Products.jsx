import React, { useContext } from "react";
import { ProductDataContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

const Products = () => {
  const ProductData = useContext(ProductDataContext);

  let renderData = 'No Products to Display'

  if(ProductData.length > 0){
    renderData = ProductData.map((elem, idx) => {
          return (
            <Link
              key={idx}
              to={`/products/${elem.id}`}
              className="bg-gray-800 rounded-xl p-4 shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300"
            >
              <div className="flex flex-col items-center">
                <img
                  className="h-48 object-contain mb-4"
                  src={elem.image}
                  alt={elem.title}
                />

                <h2 className="text-white text-sm font-semibold text-center line-clamp-2">
                  {elem.title}
                </h2>

                <p className="text-green-400 font-bold mt-2">${elem.price}</p>
              </div>
            </Link>
          );
        })
  }

  return (
    <div className="min-h-screen bg-gray-900 p-10">
      <h1 className="text-white text-3xl font-bold mb-8 text-center">
        Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {renderData}
      </div>
    </div>
  );
};

export default Products;
