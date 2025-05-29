import { Link } from "react-router-dom";
import whiteShirt from "../../images/white-shirt.png";
import blackShirt from "../../images/black-shirt.png";
import blueShirt from "../../images/blue-shirt.png";

export default function TshirtLink({ _id, color, size, text, logo, customer }) {
  const colorImages = {
    bílá: whiteShirt,
    černá: blackShirt,
    modrá: blueShirt,
  };

  return (
    <Link
      to={`/tshirt/${_id}`}
      className="block bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 p-6"
    >
      <div className="flex flex-col items-center text-center space-y-2">
        <img
          src={colorImages[color]}
          alt={`Tričko ${color}`}
          className="w-28 h-28 object-contain mb-4"
        />
        <h3 className="text-xl font-semibold text-purple-800">{customer}</h3>
        <p className="text-md text-indigo-800 italic">"{text}"</p>
        <p className="text-sm text-gray-600">
          <span className="font-medium text-indigo-900">Barva:</span> {color}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium text-indigo-900">Velikost:</span> {size}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium text-indigo-900">Logo:</span> {logo}
        </p>
      </div>
    </Link>
  );
}
