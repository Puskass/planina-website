import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="flex justify-evenly items-center bg-red-700 p-4 font-semibold text-white">
      <Link to="/">
        <li>Početna</li>
      </Link>
      <Link to="/O-Nama">
        <li>O Nama</li>
      </Link>
      <Link to="/Kontakt">
        <li>Kontakt</li>
      </Link>
      <Link to="/Clanstvo">
        <li>Članstvo</li>
      </Link>
      <Link to="/Pronađi-turu">
        <li>Pronađi turu</li>
      </Link>
      <Link to="/Dodaj-turu">
        <li>Dodaj turu</li>
      </Link>
    </ul>
  );
};

export default Navbar;
