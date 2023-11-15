import React from "react";
import Aboutimg from "../assets/myimg/IMAGE2 (1).jpg";
export default function About() {
  return (
    <>
      <section className="about-busin section-padding o-hidden">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 valign">
              <div className="cont md-mb50">
                <h6 className="sub-title main-color">About Us.</h6>
                <h3>Creativity is the process of having original ideas.</h3>
                <ul
                  className="nav nav-tabs simpl-bord mt-50"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <span
                      className="nav-link active cursor-pointer"
                      id="vision-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#vision"
                    >
                      01. Our Vision
                    </span>
                  </li>
                  <li className="nav-item" role="presentation">
                    <span
                      className="nav-link cursor-pointer"
                      id="mission-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#mission"
                    >
                      02. Our Mission
                    </span>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="vision"
                    role="tabpanel"
                    aria-labelledby="vision-tab"
                  >
                    <p
                      style={{
                        fontWeight: "bold ",
                        color: "gray",
                        fontSize: "15px",
                      }}
                    >
                      Cinzel is the all-in-one WordPress theme to create your
                      amazing dream website. Easy to use, highly customizable
                      and modern.
                    </p>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="mission"
                    role="tabpanel"
                    aria-labelledby="mission-tab"
                  >
                    <p
                      style={{
                        fontWeight: "bold ",
                        color: "gray",
                        fontSize: "15px",
                      }}
                    >
                      Cinzel is the all-in-one WordPress theme to create your
                      amazing dream website. Easy to use, highly customizable
                      and modern.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="img-exp">
                <img src={Aboutimg} alt="" />
                <div className="exp">
                  <h6 className="sub-title mb-0">
                    <span className="fz-22">25</span> Years Of Experience
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid mt-100">
          <div className="row">
            <div className="col-12">
              <div className="main-marq mt-80">
                <div className="slide-har st1">
                  <div className="box">
                    <div className="item">
                      <h4>UI/UX Experience</h4> -
                    </div>
                    <div className="item">
                      <h4>Web Development</h4>
                    </div>
                    <div className="item">
                      <h4>Digital Marketing</h4>
                    </div>
                    <div className="item">
                      <h4>Product Design</h4>
                    </div>
                    <div className="item">
                      <h4>Mobile Solutions</h4>
                    </div>
                  </div>
                  <div className="box">
                    <div className="item">
                      <h4>UI/UX Experience</h4>
                    </div>
                    <div className="item">
                      <h4>Web Development</h4>
                    </div>
                    <div className="item">
                      <h4>Digital Marketing</h4>
                    </div>
                    <div className="item">
                      <h4>Product Design</h4>
                    </div>
                    <div className="item">
                      <h4>Mobile Solutions</h4>
                    </div>
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
