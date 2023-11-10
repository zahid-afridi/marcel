import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Test1 from "../assets/img/testim/1.jpg";
import Test2 from "../assets/img/testim/2.jpg";

export default function Testimonial() {
  const testimonials = [
    {
      name: "Alex Morgan",
      role: "Developer",
      image: Test1,
      text: "Creative SEO & Digital Marketing Solutions for your Business ghost flathead chain pickerel torpedo neon tetra soldierfish Ling brook lamprey slimy sculpin velvetfish Devario Colorado squaw zebra turkeyfish!",
    },
    {
      name: "John Doe",
      role: "Designer",
      image: Test2,
      text: "Another great testimonial goes here. It can contain details about the project and the person who provided the testimonial.",
    },
    // Add more testimonials here
  ];

  return (
    <section className="testim-simple section-padding  position-re">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Swiper
              pagination={{ clickable: false }}
              spaceBetween={30}
              loop={true}
              speed={1000}
              slidesPerView={1}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="item">
                    <div className="row">
                      <div className="col-lg-3 valign">
                        <div className="cle-img">
                          <img
                            src={testimonial.image}
                            alt=""
                            className="circle-img circle"
                          />
                        </div>
                      </div>
                      <div className="col-lg-8 offset-lg-1 valign">
                        <div className="cont">
                          <div className="qout-icon mb-30">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="82"
                              height="79"
                              viewBox="0 0 82 79"
                              fill="none"
                            >
                              <path
                                d="M20.6258 36.5H1V1H36.7301V37.3128L20.9472 78H5.98811L21.5581 37.8617L22.0863 36.5H20.6258Z"
                                stroke="#000"
                                strokeWidth="1" // Fix here
                              ></path>
                              <path
                                d="M64.8957 36.5H45.2699V1H81V37.3128L65.2172 78H50.2581L65.828 37.8617L66.3562 36.5H64.8957Z"
                                stroke="#000"
                                strokeWidth="1" // Fix here
                              ></path>
                            </svg>
                          </div>
                          <p className="text-black fz-20 fw-300" style={{}}>
                            {testimonial.text}
                          </p>
                          <div className="info flex mt-30">
                            <h6 className="mr-20">{testimonial.name}</h6>
                            <i>-</i>
                            <span className="opacity-7 ml-20">
                              {testimonial.role}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <div className="bg-text">
        <h2 className="stroke fw-800">Testimonials</h2>
      </div>
    </section>
  );
}
