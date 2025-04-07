import { Link } from "react-router-dom";

import React from 'react'

export default function Home() {
  return (
    <>
        <Link to={"/add-phone"}>
            <p>Add phone</p>
        </Link>

        <Link to={"/view-phone"}>
            <p>View phone</p>
        </Link>
    </>
  )
}
