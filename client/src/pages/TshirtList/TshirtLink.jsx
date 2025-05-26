import {Link} from "react-router-dom"

import React from 'react'

export default function TshirtLink(props) {
  return (
    <>
        <Link to={`/tshirt/${props._id}`}>
            <p>{props._id}</p>
        </Link>
    </>
  )
}
