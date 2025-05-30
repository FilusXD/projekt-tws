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

  const loadTshirtForUpdate = async () => {
    const data = await getTshirtById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setTshirt(data.payload);
      setFormData(data.payload);
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

  const handleInput = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateForm();
  };

  useEffect(() => {
    loadTshirtForUpdate();
  }, []);

  if (isLoaded === null) {
    return (
      <div className="w-screen min-h-screen flex flex-col items-center justify-center m-0 p-0 dark-theme-page text-white">
        <p className="text-center text-red-300 font-bold mt-4">Tričko nenalezeno.</p>
        <Link to="/view-tshirt" className="mt-6" style={{ cursor: 'pointer' }}>
          <button className="bgcontainer2 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 text-base" style={{ cursor: 'pointer' }}>
            Zpět na seznam objednávek
          </button>
        </Link>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="w-screen min-h-screen flex flex-col items-center justify-center m-0 p-0 dark-theme-page text-white">
        <p className="text-center text-gray-300 mt-4 animate-pulse">Načítání informací o tričku...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-2 dark-theme-page text-white">
      <div 
        className="w-full p-6 rounded-xl shadow-md" 
        style={{ 
          backgroundColor: '#3a3a3a', 
          maxWidth: '950px' 
        }}
      >
        <h1 className="text-3xl font-extrabold text-center mb-6 highlightedtext2">Upravit tričko</h1>
        <p className="text-sm text-gray-400 mb-4 text-center">ID: {id}</p>

        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="block text-base font-semibold mb-1" htmlFor="customer">Jméno zákazníka</label>
            <input
              id="customer"
              type="text"
              name="customer"
              required
              placeholder="Jméno zákazníka"
              onChange={handleChange}
              value={formData.customer || ""}
              className="w-full px-3 py-1.5 rounded-md focus:outline-none focus:ring-2 transition"
              style={{ backgroundColor: '#555', color: 'white', border: '1px solid #777', borderColor: '#ffd43b' }}
            />
          </div>

          <fieldset>
            <legend className="text-base font-semibold mb-1">Vyber barvu</legend>
            <div className="grid grid-cols-3 gap-3">
              {["bílá", "černá", "modrá"].map(color => (
                <button
                  key={color}
                  type="button"
                  onClick={() => handleChange({ target: { name: 'color', value: color } })}
                  className={`cursor-pointer rounded-xl border-2 p-3 text-base font-medium transition-colors`}
                  style={{ 
                      backgroundColor: formData.color === color ? '#ffd43b' : '#555',
                      borderColor: formData.color === color ? '#ffd43b' : '#777',
                      color: formData.color === color ? 'black' : '#e0e0e0',
                      boxShadow: formData.color === color ? '0 4px 6px rgba(0,0,0,0.3)' : 'none',
                      transition: 'all 0.3s ease-in-out',
                      cursor: 'pointer'
                  }}
                  onMouseOver={(e) => { if (formData.color !== color) { e.currentTarget.style.borderColor = '#ffd43b'; e.currentTarget.style.backgroundColor = '#666'; e.currentTarget.style.color = 'white'; }}}
                  onMouseOut={(e) => { if (formData.color !== color) { e.currentTarget.style.borderColor = '#777'; e.currentTarget.style.backgroundColor = '#555'; e.currentTarget.style.color = '#e0e0e0'; }}}
                >
                  {color}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-base font-semibold mb-1">Vyber velikost</legend>
            <div className="grid grid-cols-3 gap-3">
              {["M", "L", "XL"].map(size => (
                <button
                  key={size}
                  type="button"
                  onClick={() => handleChange({ target: { name: 'size', value: size } })}
                  className={`cursor-pointer rounded-xl border-2 p-3 text-base font-medium transition-colors`}
                   style={{ 
                      backgroundColor: formData.size === size ? '#ffd43b' : '#555',
                      borderColor: formData.size === size ? '#ffd43b' : '#777',
                      color: formData.size === size ? 'black' : '#e0e0e0',
                      boxShadow: formData.size === size ? '0 4px 6px rgba(0,0,0,0.3)' : 'none',
                      transition: 'all 0.3s ease-in-out',
                      cursor: 'pointer'
                  }}
                  onMouseOver={(e) => { if (formData.size !== size) { e.currentTarget.style.borderColor = '#ffd43b'; e.currentTarget.style.backgroundColor = '#666'; e.currentTarget.style.color = 'white'; }}}
                  onMouseOut={(e) => { if (formData.size !== size) { e.currentTarget.style.borderColor = '#777'; e.currentTarget.style.backgroundColor = '#555'; e.currentTarget.style.color = '#e0e0e0'; }}}
                >
                  {size}
                </button>
              ))}
            </div>
          </fieldset>

          <div>
            <label className="block text-base font-semibold mb-1" htmlFor="text">Napiš svůj text na triko</label>
            <input
              id="text"
              type="text"
              name="text"
              required
              placeholder="Tvůj text na tričko"
              onChange={handleChange}
              value={formData.text || ""}
              className="w-full px-3 py-1.5 rounded-md focus:outline-none focus:ring-2 transition"
              style={{ backgroundColor: '#555', color: 'white', border: '1px solid #777', borderColor: '#ffd43b' }}
            />
          </div>

          <fieldset>
            <legend className="text-base font-semibold mb-1">Chceš nálepku?</legend>
            <div className="grid grid-cols-2 gap-3">
              {["Ano", "Ne"].map(option => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleChange({ target: { name: 'logo', value: option } })}
                  className={`cursor-pointer rounded-xl border-2 p-3 text-base font-medium transition-colors`}
                   style={{ 
                      backgroundColor: formData.logo === option ? '#ffd43b' : '#555',
                      borderColor: formData.logo === option ? '#ffd43b' : '#777',
                      color: formData.logo === option ? 'black' : '#e0e0e0',
                      boxShadow: formData.logo === option ? '0 4px 6px rgba(0,0,0,0.3)' : 'none',
                      transition: 'all 0.3s ease-in-out',
                      cursor: 'pointer'
                  }}
                  onMouseOver={(e) => { if (formData.logo !== option) { e.currentTarget.style.borderColor = '#ffd43b'; e.currentTarget.style.backgroundColor = '#666'; e.currentTarget.style.color = 'white'; }}}
                  onMouseOut={(e) => { if (formData.logo !== option) { e.currentTarget.style.borderColor = '#777'; e.currentTarget.style.backgroundColor = '#555'; e.currentTarget.style.color = '#e0e0e0'; }}}
                >
                  {option}
                </button>
              ))}
            </div>
          </fieldset>

          {/* Tlačítko Aktualizovat tričko - nahoře a plná šířka */}
          <button
            type="submit"
            className="bgcontainer2 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-lg shadow-md transform hover:scale-105 transition" 
            style={{ cursor: 'pointer', width: '100%', marginBottom: '1.5rem' }} // Přidán margin-bottom
          >
            Aktualizovat tričko
          </button>
        </form>

        {info && <p className="mt-3 text-red-300 text-center">{info}</p>}
        
        {/* Navigační tlačítka pod formulářem - každé na vlastním řádku a plná šířka */}
        <div className="flex flex-col items-center gap-3 w-full"> {/* Změněno na flex-col a w-full */}
          <Link to={`/tshirt/${id}`} style={{ cursor: 'pointer', width: '100%' }}> {/* Přidáno width: '100%' */}
            <button className="bgcontainer2 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 text-base whitespace-nowrap" style={{ cursor: 'pointer', width: '100%' }}> {/* Přidáno width: '100%' */}
              Zpět na detail trička
            </button>
          </Link>
          <Link to={`/view-tshirt`} style={{ cursor: 'pointer', width: '100%' }}> {/* Přidáno width: '100%' */}
            <button className="bgcontainer2 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 text-base whitespace-nowrap" style={{ cursor: 'pointer', width: '100%' }}> {/* Přidáno width: '100%' */}
              Zobrazit objednávky
            </button>
          </Link>
          <Link to={`/`} style={{ cursor: 'pointer', width: '100%' }}> {/* Přidáno width: '100%' */}
            <button className="bgcontainer2 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 text-base whitespace-nowrap" style={{ cursor: 'pointer', width: '100%' }}> {/* Přidáno width: '100%' */}
              Zpět na hlavní stránku
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}