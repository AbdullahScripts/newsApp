import React from "react";
import logo from "../assets/logo.png";
export const Navbar = () => {
  return (
    <nav className="w-[100%] h-14 bg-gray-400 flex items-center justify-around ">
      <div className="logo">
        <img src={logo} alt="logo" className="" />
      </div>
      <div className="links w-3/6 flex items-center justify-around ">
        <a href="/">Corona Update</a>
        <a href="/">Bussiness</a>
        <a href="/">Sports</a>
        <a href="/">World</a>
        <a href="/">Travel</a>
        <a href="/">Podcasts</a>
      </div>
      <div className="icons"></div>
    </nav>
  );
};
