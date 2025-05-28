import { Link } from "react-router-dom";
import whiteShirt from "../../images/white-shirt.png"
import blackShirt from "../../images/black-shirt.png"
import blueShirt from "../../images/blue-shirt.png"
import React from 'react';

export default function TshirtLink({ _id, color, size, text, logo, customer }) {
  const colorImages = {
    bílá: whiteShirt,
    černá: blackShirt,
    modrá: blueShirt,
  };

  // Zjištění barvy textu pro lepší kontrast na tmavém pozadí karty
  const textColor = color === "bílá" ? "text-gray-900" : "text-white";
  const customerColor = "text-orange-300"; // Světlejší oranžová pro jméno zákazníka

  return (
    <Link
      to={`/tshirt/${_id}`}
      // Upraveno: tmavší pozadí, větší zaoblení, výraznější stín, glassmorphism efekt
      className="block bg-black/20 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden p-6 hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
    >
      <div className="flex flex-col items-center text-center">
        <img
          src={colorImages[color]}
          alt={`Tričko ${color}`}
          className="w-32 h-32 object-contain mb-4 filter drop-shadow-md" // Přidán jemný stín pro tričko
        />
        <h3 className={`text-2xl font-bold ${customerColor} mb-2`}>{customer}</h3> {/* Větší font, oranžová barva */}
        <p className={`text-lg font-semibold ${textColor} mb-2`}>"{text}"</p> {/* Větší font, dynamická barva */}
        <p className={`text-base ${textColor}`}>Barva: <span className="font-medium">{color}</span></p>
        <p className={`text-base ${textColor}`}>Velikost: <span className="font-medium">{size}</span></p>
        <p className={`text-base ${textColor}`}>Logo: <span className="font-medium">{logo}</span></p>
      </div>
    </Link>
  );
}