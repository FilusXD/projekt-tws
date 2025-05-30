import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import TshirtCreateForm from "./TshirtCreateForm";
import CreatedTshirt from "./TshirtCreateForm/CreatedTshirt";
import TshirtList from "./TshirtList/index";
import TshirtView from "./TshirtView/index";
import TshirtUpdateForm from "./TshirtUpdateForm";
import AboutUs from "./aboutUs/AboutUs";
import Contact from "./Kontakt/Contact";
import Layout from "../Components/Layout";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/add-tshirt" element={<TshirtCreateForm />} />
        <Route path="/created-tshirt/:id" element={<CreatedTshirt />} />
        <Route path="/view-tshirt" element={<TshirtList />} />
        <Route path="/tshirt/:id" element={<TshirtView />} />
        <Route path="/update-tshirt/:id" element={<TshirtUpdateForm />} />
        <Route path="/about-us" element={<Layout><AboutUs /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}