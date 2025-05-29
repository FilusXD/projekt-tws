import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md">
      <nav className="flex justify-between items-center w-full h-20 px-8">
        <h1 className="text-3xl font-extrabold text-purple-800">TričkoDesign</h1>
        <ul className="flex text-purple-800 font-semibold text-lg">
          <li className="pr-8 border-r border-purple-300">
            <Link to="/" className="hover:text-orange-500 transition duration-300">Home</Link>
          </li>
          <li className="px-8 border-r border-purple-300">
            <Link to="/about-us" className="hover:text-orange-500 transition duration-300">About Us</Link>
          </li>
          <li className="px-8 border-r border-purple-300">
            <Link to="/contact" className="hover:text-orange-500 transition duration-300">Kontakt</Link>
          </li>
          <li className="pl-8">
            <Link to="/view-tshirt" className="hover:text-orange-500 transition duration-300">Objednávky</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}