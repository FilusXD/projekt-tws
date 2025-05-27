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
    return <p className="text-center text-red-500">Tshirts not found</p>;
  }

  if (!isLoaded) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  return (
    <div className="px-4 py-8">
      <h1 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Objednávky</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Tshirts.map((tshirt, index) => (
          <TshirtLink key={index} {...tshirt} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link to="/">
          <button className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition">
            Zpět na hlavní stránku
          </button>
        </Link>
      </div>
    </div>
  );
}
