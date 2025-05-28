import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllTshirts } from "../../models/Tshirt";
import React from "react";
import TshirtLink from "./TshirtLink";

export default function TshirtList() {
  const [Tshirts, setTshirts] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllTshirts();
    if (data.status === 404 || data.status === 500) return setLoaded(null);
    if (data.status === 200) {
      setTshirts(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <div // Přidáváme wrapper pro pozadí i u chybové hlášky
        className="w-screen h-screen flex flex-col items-center justify-center m-0 p-0"
        style={{ background: "linear-gradient(135deg, #1e3a8a, #f59e0b)", color: "white" }}
      >
        <p className="text-center text-red-300 text-xl font-semibold">Trička nebyla nalezena.</p>
        <Link to="/" className="mt-6">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 text-lg">
            Zpět na hlavní stránku
          </button>
        </Link>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div // Přidáváme wrapper pro pozadí i u načítání
        className="w-screen h-screen flex flex-col items-center justify-center m-0 p-0"
        style={{ background: "linear-gradient(135deg, #1e3a8a, #f59e0b)", color: "white" }}
      >
        <p className="text-center text-white text-xl font-semibold animate-pulse">Načítání objednávek...</p>
      </div>
    );
  }

  return (
    <div
      className="w-screen min-h-screen flex flex-col m-0 p-0 py-8" // Adjusted: min-h-screen to allow content to extend, added py-8
      style={{ background: "linear-gradient(135deg, #1e3a8a, #f59e0b)" }} // Používáme gradient pro celé pozadí
    >
      <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-10 text-center drop-shadow-lg"> {/* Zvětšeno, bílá barva, stín */}
        Objednávky
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-8 max-w-7xl mx-auto w-full"> {/* Přidány responzivní sloupce, max-width, auto-margin */}
        {Tshirts.map((tshirt, index) => (
          <TshirtLink key={index} {...tshirt} />
        ))}
      </div>

      <div className="mt-12 text-center pb-8"> {/* Zvětšen margin, padding-bottom */}
        <Link to="/">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 md:py-4 px-6 md:px-10 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300 text-lg md:text-xl"> {/* Tlačítko z hlavní stránky */}
            Zpět na hlavní stránku
          </button>
        </Link>
      </div>
    </div>
  );
}