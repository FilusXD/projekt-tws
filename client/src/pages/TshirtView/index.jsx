import { Link, useParams, useNavigate } from "react-router-dom";
import { getTshirtById, deleteTshirt } from "../../models/Tshirt";
import { useState, useEffect } from "react";

import React from "react";

export default function TshirtView() {
  const { id } = useParams();
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
  };

  const handleChange = (e) => {
    setFormData(e.target.value);
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    if (Tshirt.name === formData) {
      const data = await deleteTshirt(id);
      if (data.status === 200) {
        //navigate(`/deleted-Tshirt/${id}`)
        navigate(`/`)
      } else{
        setInfo(data.message);
      }
    } else {
      setInfo("Wrong input")
    }
  }

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
        <p>Tshirt not found</p>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <p>Tshirt is loading...</p>
      </>
    );
  }

  return (
    <>
      <h1>Tshirt view </h1>
      <p>{id}</p>
      <p>Customer: {Tshirt.customer}</p>
      <p>Tshirt color: {Tshirt.color}</p>
      <p>Tshirt size: {Tshirt.size}</p>
      <p>Tshirt text: {Tshirt.text}</p>
      <p>Tshirt logo: {Tshirt.logo}</p>
      <form>
        <input type="text" placeholder={Tshirt._id} onChange={handleChange} />
        <button onClick={handleDelete}>Delete Tshirt</button>
      </form>
      <p>{info}</p>
      <Link to={`/update-tshirt/${id}`}>
        <p>Update Tshirt</p>
      </Link>
      <Link to={`/`}>
        <p>Go home</p>
      </Link>
    </>
  );
}
