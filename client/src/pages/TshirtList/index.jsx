import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
<<<<<<< HEAD
import { getAllTshirts } from "../../models/Tshirt"; // TUTO LOGIKU NEZMĚNÍM
import React from "react";
import TshirtLink from "./TshirtLink"; // Předpokládám, že TshirtLink je již upravena pro dark theme
=======
import { getAllTshirts } from "../../models/Tshirt";
import TshirtLink from "./TshirtLink";
>>>>>>> baae4128fd331b8acf5875ccadc7dee1e200819b

export default function TshirtList() {
  const [Tshirts, setTshirts] = useState([]); // Ponecháno 'Tshirts' jak jsi měl
  const [isLoaded, setLoaded] = useState(false);
  const [deleteStatus, setDeleteStatus] = useState(null); // Ponecháno deleteStatus pro zprávy

  const load = async () => {
    // Ponechána původní load funkce
    const data = await getAllTshirts();
    if (data.status === 404 || data.status === 500) return setLoaded(null);
    if (data.status === 200) {
      setTshirts(data.payload);
      setLoaded(true);
    }
  };

  // Ponechána handleDeleteAll, jen prozatím v komentářích pro funkčnost
  // const handleDeleteAll = async () => { /* ... */ };

  useEffect(() => {
    load();
  }, []); // Ponechána původní závislost bez deleteStatus

  // --- JSX pro zobrazení stavu načítání/chyby/dat s dark theme ---

  const sharedStyles = {
    background: "#f5f3ff", // světle fialové pozadí
    color: "#1e3a8a",       // tmavě modrý text
  };

  if (isLoaded === null) {
    // Stav chyby/žádná data
    return (
<<<<<<< HEAD
      <div className="w-screen min-h-screen flex flex-col items-center justify-center m-0 p-0 dark-theme-page text-white">
        <p className="text-center text-red-300 text-xl font-semibold">
          Trička nebyla nalezena.
        </p>
        {deleteStatus && <p className="text-white mt-4">{deleteStatus}</p>}{" "}
        {/* Zpráva o smazání */}
        <Link to="/" className="mt-6" style={{ cursor: "pointer" }}>
          <button
            className="bgcontainer2 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 text-lg"
            style={{ cursor: "pointer" }}
          >
=======
      <div className="w-screen h-screen flex flex-col items-center justify-center m-0 p-0" style={sharedStyles}>
        <p className="text-center text-red-500 text-xl font-semibold">Trička nebyla nalezena.</p>
        <Link to="/" className="mt-6">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300 text-lg">
>>>>>>> baae4128fd331b8acf5875ccadc7dee1e200819b
            Zpět na hlavní stránku
          </button>
        </Link>
      </div>
    );
  }

  if (!isLoaded) {
    // Stav načítání
    return (
<<<<<<< HEAD
      <div className="w-screen min-h-screen flex flex-col items-center justify-center m-0 p-0 dark-theme-page text-white">
        <p className="text-center text-white text-xl font-semibold animate-pulse">
          Načítání objednávek...
        </p>
        {deleteStatus && <p className="text-white mt-4">{deleteStatus}</p>}{" "}
        {/* Zpráva o smazání */}
=======
      <div className="w-screen h-screen flex flex-col items-center justify-center m-0 p-0" style={sharedStyles}>
        <p className="text-center text-purple-700 text-xl font-semibold animate-pulse">Načítání objednávek...</p>
>>>>>>> baae4128fd331b8acf5875ccadc7dee1e200819b
      </div>
    );
  }

  return (
<<<<<<< HEAD
    // Celý div stránky s dark theme pozadím a světlým textem
    <div className="flex-grow flex flex-col py-8 dark-theme-page text-white">
      <h1 className="text-5xl md:text-6xl font-extrabold highlightedtext2 mb-10 text-center drop-shadow-lg">
        Objednávky
      </h1>

      {deleteStatus && ( // Zpráva o smazání
        <p
          className={`text-center mb-4 ${
            deleteStatus.includes("Chyba") ? "text-red-300" : "text-green-300"
          }`}
        >
          {deleteStatus}
        </p>
      )}

      {/* Zobrazíme seznam triček jen pokud je nějaké tričko */}
      {Tshirts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-8 max-w-7xl mx-auto w-full">
          {Tshirts.map((tshirt, index) => (
            <TshirtLink key={tshirt._id || index} {...tshirt} />
          ))}
        </div>
      ) : (
        // Pokud nejsou žádná trička
        <div className="flex-1 flex flex-col items-center justify-center">
          {" "}
          {/* Centrování zprávy */}
          <p className="text-center text-white text-xl font-semibold mt-8">
            Zatím nejsou žádné objednávky triček.
          </p>
        </div>
      )}

      <div className="mt-12 text-center pb-8 flex flex-col items-center gap-4">
        <Link to="/" style={{ cursor: "pointer" }}>
          <button
            className="bgcontainer2 hover:bg-yellow-600 text-white font-bold py-3 md:py-4 px-6 md:px-10 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300 text-lg md:text-xl"
            style={{ cursor: "pointer" }}
          >
=======
    <div className="w-screen min-h-screen flex flex-col m-0 p-0 py-8" style={sharedStyles}>
      <h1 className="text-5xl md:text-6xl font-extrabold text-purple-800 mb-10 text-center drop-shadow-lg">
        Objednávky
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-8 max-w-7xl mx-auto w-full">
        {Tshirts.map((tshirt, index) => (
          <TshirtLink key={index} {...tshirt} />
        ))}
      </div>

      <div className="mt-12 text-center pb-8">
        <Link to="/">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 md:py-4 px-6 md:px-10 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300 text-lg md:text-xl">
>>>>>>> baae4128fd331b8acf5875ccadc7dee1e200819b
            Zpět na hlavní stránku
          </button>
        </Link>
        {/* Tlačítko pro smazání VŠECH triček - zachováno, pokud ho máš */}
        {/* <button
          onClick={handleDeleteAll}
          className="bg-red-700 hover:bg-red-800 text-white font-bold py-3 md:py-4 px-6 md:px-10 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300 text-lg md:text-xl mt-4" style={{ cursor: 'pointer' }}
        >
          Smazat VŠECHNA trička
        </button> */}
      </div>
    </div>
  );
}
