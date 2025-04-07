import { Link, useParams, useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import { updatePhone, getPhoneById } from "../../models/Phone";

import React from 'react'

export default function PhoneUpdateForm() {
  const {id} = useParams();
  const [Phone, setPhone] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getPhoneById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setPhone(data.payload);
      setLoaded(true);
    }
  }

  const updateForm = async () => {
    const data = await updatePhone(id, formData);
    if (data.status === 200) return navigate(`/phone/${id}`);
    setInfo(data.message);
  }

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    updateForm();
  }

  useEffect (() => {
    load();
  }, []);

  if (isLoaded === null) {
    return(
      <>
        <p>Phone not found</p>
      </>
    )
  }

  if (!isLoaded) {
    return (
      <>
        <p>Phone info is loading</p>
      </>
    )
  }

  return (
    <>
    <h1>Phone update form</h1>
    <p>{id}</p>
    <form>
    <input type="text" name="name" required placeholder="Enter name" onChange={handleChange} defaultValue={Phone.name}/>
        <input type="text" name="brand" required placeholder="Enter brand" onChange={handleChange} defaultValue={Phone.brand}/>
        <input type="text" name="color" required placeholder="Enter color" onChange={handleChange} defaultValue={Phone.color}/>
        <input type="number" name="price" required placeholder="Enter price" onChange={handleChange} defaultValue={Phone.price}/>
        <button onClick={handleUpdate}>Update Phone</button>
    </form>
    </>
  )
}
