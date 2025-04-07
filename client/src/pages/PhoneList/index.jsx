import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllPhones } from "../../models/Phone";

import React from "react";
import PhoneLink from "./PhoneLink";

export default function PhoneList() {
  const [Phones, setPhones] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllPhones();
    if (data.status === 404 || data.status === 500) return setLoaded(null);
    if (data.status === 200) {
      setPhones(data.payload);
      setLoaded(true);
    }
  };

  //window.onload
  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
        <p>Phones not found</p>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }

  return (
    <>
      <h1>Phone list XD</h1>
      {
        Phones.map((Phone, index) => (
          <PhoneLink key={index} {...Phone}/>
        ))
      }
      <Link to={"/"}>
        <p>Go home</p>
      </Link>
    </>
  );
}
