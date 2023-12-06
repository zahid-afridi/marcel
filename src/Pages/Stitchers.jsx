import React, { useEffect } from "react";
import Footer from "../Portfolio_Component/Footer";
import Hero from "../Portfolio_Component/Hero";
import Main from "../Portfolio_Component/Main";
import Stitchers from "./Stitchers";
import { Outlet } from "react-router-dom";

export default function Portfolio() {
  useEffect(() => {
    document.body.style.backgroundColor = "#191b1d"; // Replace with your desired color code

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <>
      <Hero />
      <Main />
      <Footer />
      <Outlet></Outlet>
    </>
  );
}
