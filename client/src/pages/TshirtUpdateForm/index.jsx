import { Link, useParams, useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import { updateTshirt, getTshirtById } from "../../models/Tshirt";

import React from 'react'

export default function TshirtUpdateForm() {
  const {id} = useParams();
  const [Tshirt, setTshirt] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getTshirtById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setTshirt(data.payload);
      setLoaded(true);
    }
  }

  const updateForm = async () => {
    const data = await updateTshirt(id, formData);
    if (data.status === 200) return navigate(`/tshirt/${id}`);
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
        <p>Tshirt not found</p>
      </>
    )
  }

  if (!isLoaded) {
    return (
      <>
        <p>Tshirt info is loading</p>
      </>
    )
  }

  return (
    <>
    <h1>Tshirt update form</h1>
    <p>{id}</p>
    <form>
        <input type="text" name="size" required placeholder="Enter size" onChange={handleChange} defaultValue={Tshirt.size}/>
        <input type="text" name="color" required placeholder="Enter color" onChange={handleChange} defaultValue={Tshirt.color}/>
        <input type="text" name="text" required placeholder="Enter text" onChange={handleChange} defaultValue={Tshirt.text}/>
        <input type="text" name="material" required placeholder="Enter material" onChange={handleChange} defaultValue={Tshirt.material}/>
        <input type="object" name="logo" required placeholder="Enter logo" onChange={handleChange} defaultValue={Tshirt.logo}/>
        <button onClick={handleUpdate}>Update Tshirt</button>
    </form>
    </>
  )
}
