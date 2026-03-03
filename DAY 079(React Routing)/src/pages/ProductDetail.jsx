import React from "react";
import { useParams } from "react-router-dom";
const Laptop = () => {
  const params = useParams();
    return (
      <div className="absolute left-1/2 top-3/9 -translate-x-1/2 text-white text-4xl text-nowrap">
        {params.productId} Details are visible here
      </div>
  );
};

export default Laptop;

