import { Link, useParams } from "react-router-dom";
import React from 'react'

export default function CreatedTshirt() {
    const {id} = useParams();
  return (
    <>
        <h1>New Tshirt created: {_id}</h1>
        <Link to={`/tshirt/${_id}`}>
            <p>View Tshirt</p>
        </Link>
        <Link to={`/`}>
            <p>Go home</p>
        </Link>
    </>
  )
}
