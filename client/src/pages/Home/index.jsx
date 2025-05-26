import React from "react";
import { Link } from "react-router-dom";
import { FaTshirt, FaShoppingCart } from "react-icons/fa"; // ikony

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-200 flex flex-col items-center justify-center text-center px-4">
      {/* Hlavní nadpis */}
      <h1 className="text-5xl font-extrabold text-yellow-600 drop-shadow-lg mb-6 animate-bounce">
        Vytvoř si vlastní tričko!
      </h1>

      {/* Popis */}
      <p className="text-lg text-yellow-800 mb-8 max-w-lg">
        Vytvoř si originální tričko podle svého stylu. Vyber barvu, velikost, text, nebo přidej logo!
      </p>

      {/* Obrázek */}
      <img
        src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
        alt="Tričko"
        className="w-48 h-48 mb-8 animate-pulse"
      />

      {/* Akční tlačítka */}
      <div className="flex flex-col sm:flex-row gap-6">
        <Link to="/add-tshirt">
          <button className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
            <FaTshirt />
            Vytvořit tričko
          </button>
        </Link>

        <Link to="/view-tshirt">
          <button className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-4 px-8 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
            <FaShoppingCart />
            Zobrazit objednávky
          </button>
        </Link>
      </div>

      {/* Sekce s výhodami */}
      <div className="mt-16 grid gap-8 sm:grid-cols-3 max-w-4xl">
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
          <h3 className="text-yellow-600 font-bold text-xl mb-2">🎨 Kreativita</h3>
          <p>Navrhni si tričko, které tě vystihuje. Vlastní barvy, velikosti i texty!</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
          <h3 className="text-yellow-600 font-bold text-xl mb-2">🚚 Rychlé doručení</h3>
          <p>Hotové tričko doručíme rychle a spolehlivě.</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
          <h3 className="text-yellow-600 font-bold text-xl mb-2">💬 Podpora</h3>
          <p>Potřebuješ poradit? Naše podpora je tu pro tebe.</p>
        </div>
      </div>
    </div>
  );
}