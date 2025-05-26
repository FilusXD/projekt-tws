import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Home from "./Home";
import TshirtCreateForm from "./TshirtCreateForm";
import CreatedTshirt from "./TshirtCreateForm/CreatedTshirt";
import TshirtList from "./TshirtList/index";
import TshirtView from "./TshirtView/index";
import TshirtUpdateForm from "./TshirtUpdateForm";


export default function AppRoutes() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/add-tshirt" element={<TshirtCreateForm/>}/>
                <Route path="/created-tshirt/:id" element={<CreatedTshirt/>}/>
                <Route path="/view-tshirt" element={<TshirtList/>}/>
                <Route path="/tshirt/:id" element={<TshirtView/>}/>
                <Route path="/update-phone/:id" element={<TshirtUpdateForm/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}
