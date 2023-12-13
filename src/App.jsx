import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Logo from "./assets/myimg/Marcel-Tech-Logo_02.png";
import "./scss/style.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navabar from "./Component/HeroSection/Navabar";
import Porotfilio from "./Pages/Portfolio";
import Stitchers from "./Pages/Stitchers";
import Contact from "./Pages/Contact";
import CozyandComfort from "./Pages/CozyandComfort";
import ScrollTotop from "./Component/ScrollTotop";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navabar logo={Logo}></Navabar>
        <ScrollTotop></ScrollTotop>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/portfolio" element={<Porotfilio></Porotfilio>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>

          <Route path="/portfolio/stitchers" element={<Stitchers />}></Route>
          <Route
            path="/portfolio/cozy&comfort"
            element={<CozyandComfort></CozyandComfort>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
