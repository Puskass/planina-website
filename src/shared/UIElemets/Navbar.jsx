import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="flex justify-evenly items-center bg-red-700 p-4 font-semibold text-white">
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/about-us">
        <li>About Us</li>
      </Link>
      <Link to="/contact">
        <li>Contact</li>
      </Link>
      <Link to="/membership">
        <li>Membership</li>
      </Link>
      <Link to="/find-tour">
        <li>Find tour</li>
      </Link>
      <Link to="/add-tour">
        <li>Add tour</li>
      </Link>
    </ul>
  );
};

export default Navbar;
