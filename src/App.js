import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/home/Home.js";
import Overland from "./pages/Overland";
import OceanNetwork from "./pages/OceanNetwork.js";
import AirFreight from "./pages/AirFreight.js";
import Cargo from "./pages/Cargo.js";
import Storage from "./pages/Storage.js";
import Warehouse from "./pages/Warehouse.js";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/services/overland" element={<Overland />} />
        <Route path="/services/ocean" element={<OceanNetwork />} />
        <Route path="/services/airfreight" element={<AirFreight />} />
        <Route path="/services/cargo" element={<Cargo />} />
        <Route path="/services/storage" element={<Storage />} />
        <Route path="/services/warehousing" element={<Warehouse />} />
      </Routes>
    </>
  );
};

export default App;
