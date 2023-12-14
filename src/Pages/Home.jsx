import React, { useEffect } from "react";
import $ from "jquery";
import Navabar from "../Component/HeroSection/Navabar";
import Hero from "../Component/HeroSection/Hero";
import Logo from "../assets/img/logo-light.png";
import Intro from "../Component/Intro";
import About from "../Component/About";
import Porotfilio from "../Component/Porotfilio";
import Service from "../Component/Service";
import Number from "../Component/Number";
import ClientBrans from "../Component/ClientBrans";
import OurTeam from "../Component/OurTeam";
import Testemoinal from "../Component/Testemoinal";
import Blog from "../Component/Blog";
import Footer from "../Component/Footer";
import MouseFollow from "../Component/MouseFollow";

export default function Home() {
  useEffect(() => {
    document.body.style.backgroundColor = "white";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
  return (
    <>
      <Hero />
      <Intro />
      <About />
      <Porotfilio />
      <Service />
      <Number />
      <ClientBrans />
      {/* <OurTeam /> */}
      <Testemoinal />
      {/* <Blog /> */}
      <Footer />
    </>
  );
}
