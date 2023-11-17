import React from "react";
import HeroImg from "../assets/img/works/project2/bg.jpg";
console.log(HeroImg);
export default function Hero() {
  const backgroundStyle = {
    backgroundImage: `url(${HeroImg})`,
    backgroundSize: "cover !important",
    backgroundPosition: "center !important",
  };

  return (
    <>
      <section class="works-header d-flex align-items-end ">
        <div
          class="background bg-img parallaxie"
          style={backgroundStyle}
          data-overlay-dark="5"
        ></div>
        <div class="container-xxl">
          <div class="row">
            <div class="col-lg-8 col-md-10">
              <div class="cont mb-80">
                <h6 class="sub-title main-color">art & illustration</h6>
                <h1
                  class="fw-500 text-white title"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Inspiring new space.
                </h1>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="item">
                    <h6>Client</h6>
                    <p class="fw-500 mt-10">
                      <a href="#0">Envato.com</a>
                    </p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="item">
                    <h6>Date</h6>
                    <p class="fw-500 mt-10">6 August 2019</p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="item">
                    <h6>Tags</h6>
                    <p class="fw-500 mt-10">
                      <a href="#0">Minimal</a> , <a href="#0">Modern</a> ,{" "}
                      <a href="#0">Design</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
