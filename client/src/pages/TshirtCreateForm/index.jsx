import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createTshirt } from "../../models/Tshirt";
import React from "react";

export default function TshirtCreateForm() {
  const [formData, setFormData] = useState({
    customer: '',
    color: '',
    text: '',
    size: '',
    logo: ''
  });
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const Tshirt = await createTshirt(formData);
    if (Tshirt.status === 201) {
      return navigate("/created-tshirt");
    }
    setInfo(Tshirt.message);
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleInput = (name, value) => {
    setFormData({ ...formData, [name]: value });
  }

  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  }

  const isFormValid = formData.customer && formData.color && formData.text && formData.size && formData.logo;
  const loading = false;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-lg w-full p-6 bg-white rounded-xl shadow-md">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-purple-700">Vytvoř si vlastní tričko</h1>
        <form onSubmit={handlePost} className="space-y-6">
          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="customer">Tvoje jméno</label>
            <input
              id="customer"
              type="text"
              name="customer"
              placeholder="Zadej své jméno"
              value={formData.customer}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            />
          </div>

          <fieldset>
            <legend className="text-lg font-semibold mb-2">Vyber barvu</legend>
            <div className="grid grid-cols-3 gap-4">
              {["bílá", "černá", "modrá"].map(color => (
                <button
                  key={color}
                  type="button"
                  onClick={() => handleInput("color", color)}
                  className={`cursor-pointer rounded-2xl border-2 p-4 text-lg font-medium transition-colors
                    ${formData.color === color
                      ? "bg-purple-600 border-purple-700 text-white shadow-md"
                      : "border-gray-300 hover:border-purple-400 hover:bg-purple-100 text-gray-700"
                    }`}
                  aria-pressed={formData.color === color}
                >
                  {color}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-lg font-semibold mb-2">Vyber velikost</legend>
            <div className="grid grid-cols-3 gap-4">
              {["M", "L", "XL"].map(size => (
                <button
                  key={size}
                  type="button"
                  onClick={() => handleInput("size", size)}
                  className={`cursor-pointer rounded-2xl border-2 p-4 text-lg font-medium transition-colors
                    ${formData.size === size
                      ? "bg-purple-600 border-purple-700 text-white shadow-md"
                      : "border-gray-300 hover:border-purple-400 hover:bg-purple-100 text-gray-700"
                    }`}
                  aria-pressed={formData.size === size}
                >
                  {size}
                </button>
              ))}
            </div>
          </fieldset>

          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="text">Napiš svůj text na triko</label>
            <input
              id="text"
              type="text"
              name="text"
              placeholder="Tvůj text na tričko"
              value={formData.text}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            />
          </div>

          <fieldset>
            <legend className="text-lg font-semibold mb-2">Chceš nálepku?</legend>
            <div className="grid grid-cols-2 gap-4">
              {["Ano", "Ne"].map(option => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleInput("logo", option)}
                  className={`cursor-pointer rounded-2xl border-2 p-4 text-lg font-medium transition-colors
                    ${formData.logo === option
                      ? "bg-purple-600 border-purple-700 text-white shadow-md"
                      : "border-gray-300 hover:border-purple-400 hover:bg-purple-100 text-gray-700"
                    }`}
                  aria-pressed={formData.logo === option}
                >
                  {option}
                </button>
              ))}
            </div>
          </fieldset>

          <button
            type="submit"
            disabled={!isFormValid || loading}
            className={`w-full py-3 rounded-xl font-bold text-white transition
              ${isFormValid && !loading ? "bg-purple-600 hover:bg-purple-700" : "bg-purple-200 cursor-not-allowed"}`}
          >
            {loading ? "Odesílám..." : "Přidat tričko"}
          </button>
        </form>

        {info && <p className="mt-4 text-center text-red-500">{info}</p>}

        <div className="mt-6 text-center">
          <Link to="/" className="text-purple-600 hover:underline font-semibold">
            Zpět na hlavní stránku
          </Link>
        </div>
      </div>
    </div>
  );
}
