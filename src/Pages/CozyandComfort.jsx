import React, { useEffect } from "react";
import Footer from "../Portfolio_Component/Footer";
import Hero from "../Portfolio_Component/Hero";
// import Img1 from '../assets/myimg/protfoilio/img2.jpg'
import Img1 from "../assets/myimg/protfoilio/cozy/img1.jpg";
import Img2 from "../assets/myimg/protfoilio/cozy/img2.jpg";
import Img3 from "../assets/myimg/protfoilio/cozy/img3.jpg";
import Img4 from "../assets/myimg/protfoilio/cozy/img4.jpg";
import Img5 from "../assets/myimg/protfoilio/cozy/img5.jpg";
import Img6 from "../assets/myimg/protfoilio/cozy/img6.jpg";
import Img7 from "../assets/myimg/protfoilio/cozy/img7.jpg";
import Img8 from "../assets/myimg/protfoilio/cozy/img8.jpg";
import Img9 from "../assets/myimg/protfoilio/cozy/img9.jpg";
import Img10 from "../assets/myimg/protfoilio/cozy/img10.jpg";

import { Outlet } from "react-router-dom";

import HeroImg from "../assets/myimg/protfoilio/cozy/headimg.jpg";
export default function CozyandComfort() {
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
      <Hero backgroundStyle={backgroundStyle} heroHeading="Cozy & Comfort" />
      <div
        className="container "
        style={{ marginTop: "55px", marginBottom: "53px" }}
      >
        <h1
          className="fs-1 text-center text-white"
          style={{ fontFamily: "'Syne', sans-serif", fontWeight: "400" }}
        >
          Unleashing Imagination,Creafting Innvation: <br></br>
          Your Ideas,<span className="main-color">Our Expertise.</span>
        </h1>
      </div>

      {/* images start */}
      <div className="container  ">
        <div className="row ">
          <div className="col-md-12 col-lg-12 col-12 col-sm-12">
            <div>
              <img src={Img1} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
        <div className="row mt-3 ">
          <div className="col-md-7 col-lg-7 col-12 col-sm-12 ">
            <div className="col-12">
              <img src={Img2} className="img-fluid w-full" alt="" />
            </div>
            <div className="col-12 mt-2">
              <img src={Img5} className="img-fluid w-full" alt="" />
            </div>
          </div>
          <div className="col-md-5 col-lg-5 col-12 col-sm-12">
            <div className="col-12">
              <img src={Img3} className="" alt="" style={{ height: "36rem" }} />
            </div>
            <div className="col-12 mt-2">
              <img src={Img4} className="img-fluid w-full" alt="" />
            </div>
            <div className="col-12 mt-2">
              <img src={Img6} className="img-fluid " alt="" />
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-lg-6 col-md-6 col-12 col-sm-12 ">
            <img src={Img7} className="" alt="" style={{ height: "43rem" }} />
          </div>
          <div className="col-lg-6 col-md-6 col-12 col-sm-12 ">
            <img src={Img8} className="img-fluid " alt="" />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-lg-12 col-md-12 col-12 col-sm-12 ">
            <img src={Img9} className="img-fluid " alt="" />
          </div>
          <div className="col-lg-12 col-md-12 col-12 mt-2 col-sm-12 ">
            <img src={Img10} className="img-fluid " alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
