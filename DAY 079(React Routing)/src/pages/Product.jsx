import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <div className="absolute left-1/2 top-3/9 -translate-x-1/2 text-white text-8xl underline text-nowrap">
        Product Page
      </div>
      <div className="flex gap-[30px] italic text-white absolute left-1/2 top-5/9 -translate-x-1/2 text-white text-3xl underline ">
        <Link to="/product/men">Men's Section</Link>
        <Link to="/product/women">Women's Section</Link>
      </div>
    </div>
  );
};

export default Product;
