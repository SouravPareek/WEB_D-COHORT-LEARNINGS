import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="relative w-screen h-screen  bg-black text-white text-center">
      <div className="absolute top-1/2 left-1/2 -translate-1/2">
        <h2 className="text-8xl mb-10 font-light whitespace-nowrap">This is Home page...</h2>
        <button
          className="bg-red-500 text-white px-6 font-semibold py-4 text-3xl rounded-2xl active:scale-95"
          onClick={() => {
            navigate("/products");
          }}
        >
          Explore Products
        </button>
      </div>
    </div>
  );
};

export default Home;
