import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createTshirt } from "../../models/Tshirt";
import React from 'react';

export default function TshirtCreateForm() {
  const [formData, setFormData] = useState({
    size: '',
    color: '',
    text: '',
    material: '',
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
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  }

  return (
    <>
      <h1>Create Tshirt</h1>
      <form className="space-y-6">
        <h2 className="text-3xl font-bold mb-6">Vytvoř si vlastní tričko</h2>
        <input 
          type="text" 
          name="size" 
          required 
          placeholder="Enter customer name" 
          onChange={handleChange} 
          value={formData.size}
        />
          <div>
          <h3 className="text-xl font-semibold mb-2">Vyber barvu</h3>
          <div className="grid grid-cols-3 gap-4">
            {["bílá", "černá", "modrá"].map((color) => (
              <button
                type="button"
                key={color}
                className={`rounded-2xl border-2 p-4 text-lg font-medium transition-all ${
                  formData.color === color
                    ? "bg-yellow-100 border-yellow-500"
                    : "border-gray-300 hover:border-yellow-400"
                }`}
                onClick={() => handleInput("barva", color)}
              >
                {color}
              </button>
            ))}
          </div>
        </div>
        <input 
          type="text" 
          name="text" 
          required 
          placeholder="Enter text" 
          onChange={handleChange} 
          value={formData.text}
        />
        <input 
          type="text" 
          name="material" 
          required 
          placeholder="Enter material" 
          onChange={handleChange} 
          value={formData.material}
        />
        <input 
          type="object" 
          name="logo" 
          required 
          placeholder="Insert logo" 
          onChange={handleChange} 
          value={formData.logo}
        />
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
