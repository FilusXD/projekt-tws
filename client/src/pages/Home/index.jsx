import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col m-0 p-0">

      {/* Navigace */}
      <header className="bg-blue-900 shadow-md w-full">
        <nav className="flex justify-between items-center w-full h-20 px-8">
          <h1 className="text-3xl font-extrabold text-white">TričkoDesign</h1>
          <ul className="flex gap-8 text-white font-semibold text-lg">
            <li><Link to="/" className="hover:text-orange-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-orange-300">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-orange-300">Kontakt</Link></li>
            <li><Link to="/view-tshirt" className="hover:text-orange-300">Objednávky</Link></li>
          </ul>
        </nav>
      </header>

      {/* Obsah */}
      <main
        className="flex flex-1 flex-col md:flex-row"
        style={{
          background: "linear-gradient(135deg, #1e3a8a, #f59e0b)", // Tmavě modrá a teplá oranžová
          color: "white",
          width: "100vw",
          height: "100vh",
          padding: 0,
          margin: 0,
        }}
      >
        <div className="flex-1 flex flex-col justify-center items-start p-8 md:p-16">
          <h2 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg mb-6">
            Vytvoř si vlastní tričko!
          </h2>
          <p className="text-lg md:text-2xl text-white mb-8 max-w-2xl">
            Vyber si barvu, velikost a přidej vlastní text nebo logo. Vytvoř si originální tričko, které tě vystihuje!
          </p>
          <div className="flex gap-4 md:gap-8">
            <Link to="/add-tshirt">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 md:py-4 px-6 md:px-10 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300 text-lg md:text-xl">
                Vytvořit tričko
              </button>
            </Link>
            <Link to="/view-tshirt">
              <button
                className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-3 md:py-4 px-6 md:px-10 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300 text-lg md:text-xl"
                style={{ color: "#1e3a8a" }} // Text barva modrá pro kontrast
              >
                Zobrazit objednávky
              </button>
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/892/892458.png"
            alt="Tričko"
            className="w-3/4 md:w-2/3 h-auto"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center py-2 text-sm">
        &copy; {new Date().getFullYear()} TričkoDesign | Všechna práva vyhrazena
      </footer>
    </div>
  );
}