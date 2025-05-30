import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    // Celá hlavička bude mít BÍLÉ POZADÍ a stín
    <header className="w-full bg-white shadow-md">
      <nav className="flex justify-between items-center w-full h-20 px-8">
        {/* H1 bude mít barvu z highlightedtext a BEZ HOVER EFEKTU NA BARVU */}
        <h1 className="highlightedtext text-3xl font-extrabold">TričkoDesign</h1>
        
        {/* Navigační UL - nadále s boxy bgcontainer a černým textem */}
        <ul className="flex font-semibold text-lg">
          <li className="ml-4">
            <Link 
              to="/" 
              className="bgcontainer text-white font-bold py-3 px-6 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300 text-lg"
              style={{ cursor: "pointer" }}
              onMouseOver={(e) => {
                // Tmavší odstín pro hover pozadí bgcontainer
                e.currentTarget.style.backgroundColor = '#108a9f'; // Příklad tmavší tyrkysové
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#15aabf'; // Původní bgcontainer barva
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              Home
            </Link>
          </li>
          <li className="ml-4">
            <Link 
              to="/about-us" 
              className="bgcontainer text-white font-bold py-3 px-6 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300 text-lg"
              style={{ cursor: "pointer" }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#108a9f';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#15aabf';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              About Us
            </Link>
          </li>
          <li className="ml-4">
            <Link 
              to="/contact" 
              className="bgcontainer text-white font-bold py-3 px-6 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300 text-lg"
              style={{ cursor: "pointer" }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#108a9f';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#15aabf';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              Kontakt
            </Link>
          </li>
          <li className="ml-4">
            <Link 
              to="/view-tshirt" 
              className="bgcontainer text-white font-bold py-3 px-6 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300 text-lg"
              style={{ cursor: "pointer" }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#108a9f';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#15aabf';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              Objednávky
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}