import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createPhone } from "../../models/Phone";

import React from 'react'

export default function PhoneCreateForm() {
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const Phone = await createPhone(formData);
    if (Phone.status === 201) {
      return navigate();
    }
    setInfo(Phone.message)
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
      <h1>Create Phone</h1>
      <form>
        <input type="text" name="name" required placeholder="Enter name" onChange={handleChange}/>
        <input type="text" name="brand" required placeholder="Enter brand" onChange={handleChange}/>
        <input type="text" name="color" required placeholder="Enter color" onChange={handleChange}/>
        <input type="number" name="storage" required placeholder="Enter storage" onChange={handleChange}/>
        <input type="number" name="price" required placeholder="Enter price" onChange={handleChange}/>
        <Link to={"/created-Phone"}><button onClick={handlePost}>
          Add Phone
        </button></Link>
        
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  )
}
