import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="w-screen h-screen flex flex-col m-0 p-0"
      style={{
        background: "#f5f3ff", 
        color: "#1e3a8a",
      }}
    >

      <main className="flex flex-1 flex-col md:flex-row">
        <div className="flex-1 flex flex-col justify-center items-start p-8 md:p-16">
          <h2 className="highlightedtext text-5xl md:text-7xl font-extrabold text-purple-800 drop-shadow-lg mb-6">
            Vytvoř si vlastní tričko!
          </h2>
          <p className=" text-lg md:text-2xl text-black mb-8 max-w-2xl">
            Vyber si barvu, velikost a přidej vlastní text nebo logo. Vytvoř si
            originální tričko, které tě vystihuje!
          </p>
          <div className="flex gap-4 md:gap-8">
            <Link to="/add-tshirt">
              <button
                style={{ cursor: "pointer" }}
                className="bgcontainer text-white font-bold py-3 md:py-4 px-6 md:px-10 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300 text-lg md:text-xl"
              >
                Vytvořit tričko
              </button>
            </Link>
            <Link to="/view-tshirt">
              <button
                style={{ cursor: "pointer" }}
                className="bgcontainer text-white font-bold py-3 md:py-4 px-6 md:px-10 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300 text-lg md:text-xl"
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
    </div>
  );
}