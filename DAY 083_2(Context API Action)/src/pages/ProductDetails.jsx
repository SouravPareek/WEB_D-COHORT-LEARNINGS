import React, { useContext } from "react";
import { ProductDataContext } from "../context/ProductContext";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const ProductData = useContext(ProductDataContext);
  const { id } = useParams();
  let selectdProduct = {};
  let rating = '*'
  if(ProductData.length > 0){
    selectdProduct = ProductData[id - 1];
        rating = selectdProduct.rating.rate
  }

  return (
    <div className="flex w-screen h-screen bg-white p-5 gap-5">
      <div className="w-1/2 h-full bg-gray-400 rounded-2xl p-4">
        <img
          className="w-full h-full object-contain"
          src={selectdProduct.image}
          alt=""
        />
      </div>

      <div className="w-1/2 h-full bg-white p-5">
        <p className="w-2/3 text-4xl mt-10 font-semibold">{selectdProduct.title}</p>
        <p className="text-2xl mt-10"><span className="font-bold">Category:</span> {selectdProduct.category}</p>
        <p className="text-2xl mt-10"><span className="font-bold">Rating:</span> {rating}/5</p>
        <p className="text-4xl mt-10">$<span className="font-bold">{selectdProduct.price}</span></p>
        <p className="mt-10 text-2xl">
          <span className="font-bold">Product Description:</span>
          {selectdProduct.description}
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
