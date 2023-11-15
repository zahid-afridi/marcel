import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Logo from "./assets/myimg/Marcel-Tech-Logo_02.png";
import "./scss/style.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navabar from "./Component/HeroSection/Navabar";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navabar logo={Logo}></Navabar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
