import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createTshirt } from "../../models/Tshirt";
import React from 'react';


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
      return navigate();
    }
    setInfo(Tshirt.message);
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleInput = (name, value) => {
  setFormData({ ...formData, [name]: value });
};


  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  }

  return (
    <>
      <h1>Create Tshirt</h1>
      <form className="space-y-6">
        <h2 className="text-3xl font-bold mb-6">Vytvoř si vlastní tričko</h2>
        <h3 className="text-xl font-semibold mb-2">Tvoje jméno</h3>
        <input
          type="text"
          name="customer"
          required
          placeholder="Enter name"
          onChange={handleChange}
          value={formData.customer}
        />
        <div>
          <h3 className="text-xl font-semibold mb-2">Vyber barvu</h3>
          <div className="grid grid-cols-3 gap-4">
            {["bílá", "černá", "modrá"].map((color) => (
              <button
                type="button"
                key={color}
                className={`rounded-2xl border-2 p-4 text-lg font-medium transition-all ${formData.color === color
                    ? "bg-yellow-100 border-yellow-500"
                    : "border-gray-300 hover:border-yellow-400"
                  }`}
                onClick={() => handleInput("color", color)}
              >
                {color}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Vyber velikost</h3>
          <div className="grid grid-cols-3 gap-4">
            {["M", "L", "XL"].map((size) => (
              <button
                type="button"
                key={size}
                className={`rounded-2xl border-2 p-4 text-lg font-medium transition-all ${formData.size === size
                    ? "bg-yellow-100 border-yellow-500"
                    : "border-gray-300 hover:border-yellow-400"
                  }`}
                onClick={() => handleInput("size", size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2">Napiš svůj text na triko</h3>
        <input
          type="text"
          name="text"
          required
          placeholder="Enter text"
          onChange={handleChange}
          value={formData.text}
        />
         <div>
          <h3 className="text-xl font-semibold mb-2">Chceš nálepku?</h3>
          <div className="grid grid-cols-3 gap-4">
            {["Ano", "Ne"].map((logo) => (
              <button
                type="button"
                key={logo}
                className={`rounded-2xl border-2 p-4 text-lg font-medium transition-all ${formData.logo === logo
                    ? "bg-yellow-100 border-yellow-500"
                    : "border-gray-300 hover:border-yellow-400"
                  }`}
                onClick={() => handleInput("logo", logo)}
              >
                {logo}
              </button>
            ))}
          </div>
        </div>
        <Link to={"/created-tshirt"}>
          <button onClick={handlePost}>
            Add Tshirt
          </button>
        </Link>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  )
}
