// src/components/CreatedTshirt.jsx
import { Link, useParams } from "react-router-dom";
import React from 'react';

export default function CreatedTshirt() {
  const { id } = useParams();

  return (
    // Celá stránka s dark theme pozadím a světlým textem
    <div className="w-screen min-h-screen flex flex-col items-center justify-center m-0 p-0 dark-theme-page text-white">
      <div 
        className="text-center p-12 md:p-20 rounded-xl shadow-lg flex flex-col items-center justify-center" 
        style={{ 
          backgroundColor: '#3a3a3a', 
          minHeight: '550px', 
          maxWidth: '1100px' 
        }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold highlightedtext2 mb-6 md:mb-8">
          Vaše tričko bylo úspěšně vytvořeno!
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12">
          Můžete ho najít v seznamu objednávek nebo si ho rovnou prohlédnout.
        </p>

        {/* Kontejner pro DVA HORNÍ BUTTONY - vycentrovaný */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 w-full mb-4">
          {/* Odkaz na detail trička */}
          <Link  to={`/update-tshirt/${id}`} style={{ cursor: 'pointer' }}>
            <button 
              className="bgcontainer2 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 text-lg md:text-xl whitespace-nowrap"
              style={{ minWidth: '200px', cursor: 'pointer' }}
            >
              Prohlédnout tričko
            </button>
          </Link>

          {/* Odkaz na seznam všech objednávek */}
          <Link to={`/view-tshirt`} style={{ cursor: 'pointer' }}>
            <button 
              className="bgcontainer2 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 text-lg md:text-xl whitespace-nowrap"
              style={{ minWidth: '200px', cursor: 'pointer' }}
            >
              Zobrazit objednávky
            </button>
          </Link>
        </div>
        
        {/* Kontejner pro JEDEN SPODNÍ BUTTON - vycentrovaný */}
        {/* KLÍČOVÁ ZMĚNA ZDE: Přidán mt-4 (margin-top) pro mezeru */}
        <div className="flex justify-center w-full mt-4"> 
          {/* Odkaz na hlavní stránku s bgcontainer2 stylem */}
          <Link to={`/`} style={{ cursor: 'pointer' }}>
            <button 
              className="bgcontainer2 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 text-lg md:text-xl whitespace-nowrap"
              style={{ minWidth: '200px', cursor: 'pointer' }}
            >
              Zpět na hlavní stránku
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}