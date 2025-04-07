import { Link, useParams } from "react-router-dom";
import React from 'react'

export default function CreatedPhone() {
    const {id} = useParams();
  return (
    <>
        <h1>New phone created: {id}</h1>
        <Link to={`/phone/${id}`}>
            <p>View Phone</p>
        </Link>
        <Link to={`/`}>
            <p>Go home</p>
        </Link>
    </>
  )
}
