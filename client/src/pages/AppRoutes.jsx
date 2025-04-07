import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Home from "./Home";
import PhoneCreateForm from "./PhoneCreateForm";
import CreatedPhone from "./PhoneCreateForm/CreatedPhone";
import PhoneList from "./PhoneList";
import PhoneUpdateForm from "./PhoneUpdateForm";
import PhoneView from "./PhoneView";

export default function AppRoutes() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/add-phone" element={<PhoneCreateForm/>}/>
                <Route path="/created-phone/:id" element={<CreatedPhone/>}/>
                <Route path="/view-phone" element={<PhoneList/>}/>
                <Route path="/phone/:id" element={<PhoneView/>}/>
                <Route path="/update-phone/:id" element={<PhoneUpdateForm/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}
