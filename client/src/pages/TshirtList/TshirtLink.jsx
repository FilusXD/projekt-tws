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

  return (
    <Link
      to={`/tshirt/${_id}`}
      className="block bg-white rounded-xl shadow-md overflow-hidden p-4 hover:shadow-lg transition duration-200"
    >
      <div className="flex flex-col items-center text-center">
        <img
          src={colorImages[color]}
          alt={`Tričko ${color}`}
          className="w-32 h-32 object-contain mb-4"
        />
        <h3 className="text-xl font-bold text-yellow-500 mb-1">{customer}</h3>
        <p className="text-gray-800 font-semibold">"{text}"</p>
        <p className="text-sm text-gray-600">Barva: {color}</p>
        <p className="text-sm text-gray-600">Velikost: {size}</p>
        <p className="text-sm text-gray-600">Logo: {logo}</p>
      </div>
    </Link>
  );
}
