import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Work1 from "../assets/img/works/3/1.jpg";
import New from "../assets/myimg/NEW.png";
// import Work2 from "../assets/img/works/3/2.jpg";
// import Work3 from "../assets/img/works/3/3.jpg";
// import Work4 from "../assets/img/works/3/4.jpg";
// import Work5 from "../assets/img/works/3/5.jpg";
import Branding from "../assets/myimg/Branding.jpg";
import Webdev from "../assets/myimg/webdevelopmentNEW.jpg";
import Webdev2 from "../assets/myimg/webdevelopment2.jpg";
import UI from "../assets/myimg/UI-UX.jpg";

import GD from "../assets/myimg/GD.png";

export default function Porotfilio() {
  const works = [
    { title: "Character Design", category: "Design ART", image: New },
    { title: "Fancy Cormoran", category: "Photography", image: Branding },
    { title: "This is Random", category: "Branding", image: Webdev },
    { title: "Editorial Designs", category: "Graphic Design", image: Webdev2 },
    { title: "Concept Collection", category: "ART Direction", image: UI },
  ];

  return (
    <section className="section-padding pt-0 o-hidden">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="row">
            <div className="col-lg-7">
              <h3>Our Portfolio</h3>
            </div>
            <div className="col-lg-5">
              <p
                style={{
                  fontWeight: "bold ",
                  color: "gray",
                  fontSize: "15px",
                }}
              >
                Our design services start and end with a best-in-class
                experience strategy that builds brands.
              </p>
            </div>
          </div>
        </div>
        <div
          className="work-rand-height"
          data-carousel="swiper"
          data-items="3"
          data-loop="true"
          data-space="50"
          data-speed="1000"
        >
          <Swiper spaceBetween={50} slidesPerView={3} loop={true} speed={1000}>
            {works.map((work, index) => (
              <SwiperSlide key={index}>
                <div className="item-title-out">
                  <div className="img">
                    <img src={work.image} alt="" />
                  </div>
                  <div className="info mt-30">
                    <span className="sub-title mb-10">{work.category}</span>
                    <h6>
                      <a href="project-details.html">{work.title}</a>
                    </h6>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
