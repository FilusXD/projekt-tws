import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createTshirt } from "../../models/Tshirt"; // Tuto logiku neměníme, jak jsi si přál
import React from "react";

export default function TshirtCreateForm() {
  const [formData, setFormData] = useState({
    customer: '',
    color: '',
    text: '',
    // ... ostatní data
    size: '',
    logo: ''
  });
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const Tshirt = await createTshirt(formData);
    if (Tshirt.status === 201) {
      return navigate("/created-tshirt/:id");
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
<<<<<<< HEAD
    // Celá stránka: Flexbox pro centrování samotného kontejneru formuláře na obrazovce
    <div className="min-h-screen flex items-center justify-center p-4 dark-theme-page text-white"> 
      {/* Kontejner formuláře: NEBUDE flex-col items-center justify-center */}
      <div 
        className="w-full p-6 rounded-xl shadow-md" 
        style={{ 
          backgroundColor: '#3a3a3a', 
          maxWidth: '900px'
        }}
      >
        {/* Nadpis H1: Bude mít text-center, aby se vycentroval */}
        <h1 
          className="text-4xl font-extrabold text-center mb-8 highlightedtext2 whitespace-nowrap overflow-hidden text-ellipsis" // text-center zde vycentruje nadpis
          style={{ maxWidth: '100%', display: 'inline-block' }}
        >
          Vytvoř si vlastní tričko!
        </h1>
        {/* Zbytek formuláře a jeho obsahu zůstane zarovnán normálně (ne centrován vertikálně) */}
=======
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-lg w-full p-6 bg-white rounded-xl shadow-md">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-purple-700">Vytvoř si vlastní tričko</h1>
>>>>>>> baae4128fd331b8acf5875ccadc7dee1e200819b
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
<<<<<<< HEAD
              className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 transition"
              style={{ backgroundColor: '#555', color: 'white', border: '1px solid #777', borderColor: '#ffd43b' }}
=======
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
>>>>>>> baae4128fd331b8acf5875ccadc7dee1e200819b
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
<<<<<<< HEAD
                      ? "bgcontainer2 border-yellow-500 text-black shadow-md"
                      : "border-gray-500 hover:border-yellow-400 hover:bg-gray-700 text-gray-300"
=======
                      ? "bg-purple-600 border-purple-700 text-white shadow-md"
                      : "border-gray-300 hover:border-purple-400 hover:bg-purple-100 text-gray-700"
>>>>>>> baae4128fd331b8acf5875ccadc7dee1e200819b
                    }`}
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
<<<<<<< HEAD
                      ? "bgcontainer2 border-yellow-500 text-black shadow-md"
                      : "border-gray-500 hover:border-yellow-400 hover:bg-gray-700 text-gray-300"
=======
                      ? "bg-purple-600 border-purple-700 text-white shadow-md"
                      : "border-gray-300 hover:border-purple-400 hover:bg-purple-100 text-gray-700"
>>>>>>> baae4128fd331b8acf5875ccadc7dee1e200819b
                    }`}
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
<<<<<<< HEAD
              className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 transition"
              style={{ backgroundColor: '#555', color: 'white', border: '1px solid #777', borderColor: '#ffd43b' }}
=======
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
>>>>>>> baae4128fd331b8acf5875ccadc7dee1e200819b
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
<<<<<<< HEAD
                      ? "bgcontainer2 border-yellow-500 text-black shadow-md"
                      : "border-gray-500 hover:border-yellow-400 hover:bg-gray-700 text-gray-300"
=======
                      ? "bg-purple-600 border-purple-700 text-white shadow-md"
                      : "border-gray-300 hover:border-purple-400 hover:bg-purple-100 text-gray-700"
>>>>>>> baae4128fd331b8acf5875ccadc7dee1e200819b
                    }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </fieldset>

          <button
            style={{cursor: "pointer"}}
            type="submit"
            disabled={!isFormValid || loading}
<<<<<<< HEAD
            className={`w-full py-3 rounded-xl font-bold text-black transition
              ${isFormValid && !loading ? "bgcontainer2 hover:bg-yellow-600" : "bg-gray-600 cursor-not-allowed text-gray-400"}`}
=======
            className={`w-full py-3 rounded-xl font-bold text-white transition
              ${isFormValid && !loading ? "bg-purple-600 hover:bg-purple-700" : "bg-purple-200 cursor-not-allowed"}`}
>>>>>>> baae4128fd331b8acf5875ccadc7dee1e200819b
          >
            {loading ? "Odesílám..." : "Přidat tričko"}
          </button>
        </form>

        {info && <p className="mt-4 text-center text-red-300">{info}</p>}

        <div className="mt-6 text-center">
<<<<<<< HEAD
          <Link to="/" 
            className="bgcontainer2 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 text-lg whitespace-nowrap inline-block"
            style={{ minWidth: '200px', cursor: "pointer" }}
          >
=======
          <Link to="/" className="text-purple-600 hover:underline font-semibold">
>>>>>>> baae4128fd331b8acf5875ccadc7dee1e200819b
            Zpět na hlavní stránku
          </Link>
        </div>
      </div>
    </div>
  );
}