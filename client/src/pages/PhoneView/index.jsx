import { Link, useParams, useNavigate } from "react-router-dom";
import { getPhoneById, deletePhone } from "../../models/Phone";
import { useState, useEffect } from "react";

import React from "react";

export default function PhoneView() {
  const { id } = useParams();
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
  };

  const handleChange = (e) => {
    setFormData(e.target.value);
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    if (Phone.name === formData) {
      const data = await deletePhone(id);
      if (data.status === 200) {
        //navigate(`/deleted-Phone/${id}`)
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
        <p>Phone not found</p>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <p>Phone is loading...</p>
      </>
    );
  }

  return (
    <>
      <h1>Phone view </h1>
      <p>{id}</p>
      <p>Phone name: {Phone.name}</p>
      <p>Phone brand: {Phone.brand}</p>
      <p>Phone color: {Phone.color}</p>
      <p>In storage: {Phone.storage}</p>
      <p>Phone price: {Phone.price}</p>
      <form>
        <input type="text" placeholder={Phone.name} onChange={handleChange} />
        <button onClick={handleDelete}>Delete phone</button>
      </form>
      <p>{info}</p>
      <Link to={`/update-phone/${id}`}>
        <p>Update Phone</p>
      </Link>
      <Link to={`/`}>
        <p>Go home</p>
      </Link>
    </>
  );
}
