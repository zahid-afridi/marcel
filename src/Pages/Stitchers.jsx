import React, { useEffect } from "react";
import Footer from "../Portfolio_Component/Footer";
import Hero from "../Portfolio_Component/Hero";
import Main from "../Portfolio_Component/Main";
import Stitchers from "./Stitchers";
import HeroImg from "../assets/img/works/project2/bg4.jpg";
import { Outlet } from "react-router-dom";

export default function Portfolio() {
  useEffect(() => {
    document.body.style.backgroundColor = "#191b1d"; // Replace with your desired color code

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
  const backgroundStyle = {
    backgroundImage: `url(${HeroImg})`,
    backgroundSize: "cover !important",
    backgroundPosition: "center !important",
  };
  return (
    <>
      <Hero backgroundStyle={backgroundStyle} heroHeading="Stitchers" />
      <Main />
      <Footer />
      <Outlet></Outlet>
    </>
  );
}
