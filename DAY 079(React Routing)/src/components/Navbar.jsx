import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="absolute flex gap-[50px] right-1/11 top-1/3 text-2xl text-black underline">
      <Link to="/">Home</Link>
      <Link to="/product">Product</Link>
      <Link to="/contact">Contact Us</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Navbar;
