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

export default function Home() {
  useEffect(() => {
    const mouseCursor = () => {
      const cursorInner = document.querySelector(".cursor-inner");
      const cursorOuter = document.querySelector(".cursor-outer");
      let mouseY = 0;
      let mouseX = 0;
      let isHovered = false;

      window.onmousemove = function (event) {
        if (!isHovered) {
          cursorOuter.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
        }
        cursorInner.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
        mouseY = event.clientY;
        mouseX = event.clientX;
      };

      $("body").on("mouseenter", "a, .cursor-pointer", function () {
        cursorInner.classList.add("cursor-hover");
        cursorOuter.classList.add("cursor-hover");
      });

      $("body").on("mouseleave", "a, .cursor-pointer", function () {
        if (!$(this).is("a") || !$(this).closest(".cursor-pointer").length) {
          cursorInner.classList.remove("cursor-hover");
          cursorOuter.classList.remove("cursor-hover");
        }
      });

      $("body").on("mouseenter", ".swiper-wrapper.curs-scroll", function () {
        cursorInner.classList.add("cursor-scroll");
        cursorOuter.classList.add("cursor-scroll");
      });

      $("body").on("mouseleave", ".swiper-wrapper.curs-scroll", function () {
        if (!$(this).is("a") || !$(this).closest(".cursor-pointer").length) {
          cursorInner.classList.remove("cursor-scroll");
          cursorOuter.classList.remove("cursor-scroll");
        }
      });

      cursorInner.style.visibility = "visible";
      cursorOuter.style.visibility = "visible";
    };

    mouseCursor();
  }, []);
  useEffect(() => {
    document.body.style.backgroundColor = "white";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
  return (
    <>
      {/* <!-- ==================== Start cursor ==================== */}
      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>
      {/* ///////////////////////////////End cursor ////////////////// */}

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
