import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllTshirts } from "../../models/Tshirt";

import React from "react";
import TshirtLink from "./TshirtLink";

export default function TshirtList() {
  const [Tshirts, setTshirts] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllTshirts();
    if (data.status === 404 || data.status === 500) return setLoaded(null);
    if (data.status === 200) {
      setTshirts(data.payload);
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
        <p>Tshirts not found</p>
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
      <h1>Tshirt list XD</h1>
      {
        Tshirts.map((Tshirt, index) => (
          <TshirtLink key={index} {...Tshirt}/>
        ))
      }
      <Link to={"/"}>
        <p>Go home</p>
      </Link>
    </>
  );
}
