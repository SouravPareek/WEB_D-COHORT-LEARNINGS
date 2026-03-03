import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="absolute flex gap-[50px] right-1/11 top-1/3 text-2xl text-black">
      <NavLink to="/" style={({isActive})=>({
        textDecoration: isActive? 'underline' : 'overline'
      })}>Home</NavLink>

      <NavLink to="/product" style={({isActive})=>({
        textDecoration: isActive? 'underline' : 'overline'
      })}>Product</NavLink>

      <NavLink to="/contact" style={({isActive})=>({
        textDecoration: isActive? 'underline' : 'overline',
      })}>Contact Us</NavLink>

      <NavLink to="/about" style={({isActive})=>({
        textDecoration: isActive? 'underline' : 'overline'
      })}>About</NavLink>
    </div>
  );
};

export default Navbar;
