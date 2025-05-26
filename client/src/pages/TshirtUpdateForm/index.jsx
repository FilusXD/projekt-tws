import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateTshirt, getTshirtById } from "../../models/Tshirt";
import React from 'react';

export default function TshirtUpdateForm() {
  const { id } = useParams();
  const [Tshirt, setTshirt] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState("");
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const load = async () => {
    const data = await getTshirtById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setTshirt(data.payload);
      setFormData(data.payload);  // Nastavíme rovnou formData na načtená data
      setLoaded(true);
    }
  };

  const updateForm = async () => {
    const data = await updateTshirt(id, formData);
    if (data.status === 200) return navigate(`/tshirt/${id}`);
    setInfo(data.message);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateForm();
  };

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return <p className="text-red-500 font-bold text-center mt-4">Tričko nenalezeno.</p>;
  }

  if (!isLoaded) {
    return <p className="text-center text-yellow-600 mt-4">Načítání informací o tričku...</p>;
  }

  return (
    <div className="max-w-md mx-auto p-8 bg-yellow-50 shadow-lg rounded-xl mt-10">
      <h1 className="text-3xl font-bold mb-4 text-yellow-700 text-center">Upravit tričko</h1>
      <p className="text-sm text-gray-600 mb-4 text-center">ID: {id}</p>

      <form onSubmit={handleUpdate} className="flex flex-col gap-4">
        <input
          type="text"
          name="size"
          required
          placeholder="Velikost"
          onChange={handleChange}
          value={formData.size || ""}
          className="border border-yellow-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
        />
        <input
          type="text"
          name="color"
          required
          placeholder="Barva"
          onChange={handleChange}
          value={formData.color || ""}
          className="border border-yellow-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
        />
        <input
          type="text"
          name="text"
          required
          placeholder="Text"
          onChange={handleChange}
          value={formData.text || ""}
          className="border border-yellow-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
        />
        <input
          type="text"
          name="material"
          required
          placeholder="Materiál"
          onChange={handleChange}
          value={formData.material || ""}
          className="border border-yellow-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
        />
        <input
          type="text"
          name="logo"
          required
          placeholder="Logo (URL)"
          onChange={handleChange}
          value={formData.logo || ""}
          className="border border-yellow-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
        />

        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded-lg shadow-md transition"
        >
          Aktualizovat tričko
        </button>
      </form>

      {info && <p className="mt-4 text-red-500 text-center">{info}</p>}
    </div>
  );
}
