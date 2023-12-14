import React from "react";
import Footer from "../Portfolio_Component/Footer";
import SliderImg from "../assets/img/slider/b1.jpg";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import InteroImg from "../assets/img/intro/1.jpg";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import Team1 from "../assets/img/team/t1.jpg";
import Team2 from "../assets/img/team/t2.jpg";
import Team3 from "../assets/img/team/t3.jpg";
import Testimonial from "../Portfolio_Component/Testemonial";
import ClientBrands from "../Component/ClientBrans";
// import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import { Link } from "react-router-dom";
export default function About() {
  //   const backgroundStyle = {
  //     backgroundImage: `url(${SliderImg})`,
  //     backgroundSize: "cover !important",
  //     backgroundPosition: "center !important",
  //   };
  return (
    <>
      <main>
        <div className="vline tline"></div>
        {/* 
      <!-- ==================== Start Slider ==================== --> */}

        <header className="pg-header">
          <div className="container-xxl">
            <div className="row">
              <div className="col-lg-7 col-md-10">
                <div className="cont mb-80">
                  <h6 className="sub-title main-color">About Us</h6>
                  <h3 className="fw-700 text-white">
                    We Give You Digital Solutions a full-service creative
                    agency.
                  </h3>
                </div>
              </div>
            </div>
          </div>
          {/* <div
            className="background bg-img parallaxie"
            data-background="assets/img/slider/b1.jpg"
            data-overlay-dark="4"
          >
            <div className="under">
              <h4 className="stroke fw-800">About Us</h4>
            </div>
            <div className="up">
              <h4 className="stroke fw-800">About Us</h4>
            </div>
            <div
              className="bg-img dots-bg"
              data-background="assets/img/dots-glitch.png"
            ></div>
          </div> */}
        </header>

        {/* <!-- ==================== End Slider ==================== --> */}

        {/* <!-- ==================== Start intro ==================== --> */}

        <section className="we-do section-padding">
          <div className="container-xxl">
            <div className="row">
              <div className="col-lg-6">
                <div className="md-mb30">
                  <h3 className="fz-50 text-white">
                    Fresh ideas <br />& unique designs.
                  </h3>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="text">
                  <p>
                    Through our years of experience, we’ve also learned that
                    while each channel has its own set of advantages, they all
                    work best when strategically paired with other channels.
                  </p>
                  <p className="mt-10">
                    That’s why we offer full-service strategies to each of our
                    clients, and use a combination of digital channels to
                    increase visibility, conversions, and revenue.
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt-100">
              <div className="col-lg-4">
                <div className="item flex md-mb50">
                  <div className="icon mr-30">
                    <CampaignOutlinedIcon
                      className="main-color fz-80"
                      //   style={{ marginTop: "-0.6rem" }}
                    ></CampaignOutlinedIcon>
                    <span className="main-color fz-55 pe-7s-bell"></span>
                  </div>
                  <div className="cont">
                    <h6 className="mb-15 text-white">Marketing Strategy</h6>
                    <p>
                      Praesent faucibus nisl sit amet nulla <br /> pretium a sed
                      purus.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="item flex md-mb50">
                  <div className="icon mr-30">
                    <ViewInArOutlinedIcon className="main-color fz-80"></ViewInArOutlinedIcon>
                    <span className="main-color fz-55 pe-7s-box2"></span>
                  </div>
                  <div className="cont">
                    <h6 className="mb-15 text-white">Product Design</h6>
                    <p>
                      Praesent faucibus nisl sit amet nulla <br /> pretium a sed
                      purus.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="item flex">
                  <div className="icon mr-30">
                    <LanguageOutlinedIcon className="main-color fz-80"></LanguageOutlinedIcon>
                    <span className="main-color fz-55 pe-7s-browser"></span>
                  </div>
                  <div className="cont">
                    <h6 className="mb-15 text-white">Website Design</h6>
                    <p>
                      Praesent faucibus nisl sit amet nulla <br /> pretium a sed
                      purus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- ==================== End intro ==================== --> */}
        <section className="intro-box section-padding sub-bg">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="My_main-marq section-padding pt-0">
                  <div className="slide-har st1">
                    <div className="box">
                      <div className="item">
                        <h4 className="text-white">UI/UX Experience</h4>
                      </div>
                      <div className="item">
                        <h4 className="text-whtie">Web Development</h4>
                      </div>
                      <div className="item">
                        <h4 className="text-white">Digital Marketing</h4>
                      </div>
                      <div className="item">
                        <h4>Product Design</h4>
                      </div>
                      <div className="item">
                        <h4 className="text-white">Mobile Solutions</h4>
                      </div>
                    </div>
                    <div className="box">
                      <div className="item">
                        <h4 className="text-white">UI/UX Experience</h4>
                      </div>
                      <div className="item">
                        <h4 className="text-white">Web Development</h4>
                      </div>
                      <div className="item">
                        <h4 className="text-white">Digital Marketing</h4>
                      </div>
                      <div className="item">
                        <h4 className="text-white">Product Design</h4>
                      </div>
                      <div className="item">
                        <h4 className="text-white">Mobile Solutions</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-xxl ontop">
            <div className="row">
              <div className="col-lg-5">
                <div className="img md-mb50">
                  <img src={InteroImg} alt="" />
                  <div className="vid-show bg-blur md-hide">
                    <div className="rotate-circle fz-30 text-u">
                      <svg classNameName="textcircle" viewBox="0 0 500 500">
                        <defs>
                          <path
                            id="textcircle"
                            d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                          ></path>
                        </defs>
                        <text>
                          <textPath xlinkHref="#textcircle" textLength="900">
                            Play Video - Play Video - Play Video -
                          </textPath>
                        </text>
                      </svg>
                    </div>
                    <div
                      className=""
                      style={{ backgroundColor: "transparent" }}
                    >
                      <button
                        className="vid"
                        style={{
                          backgroundColor: "transparent",
                          outline: "none",
                          border: "none",
                        }}
                      >
                        <PlayArrowOutlinedIcon
                          sx={{
                            backgroundColor: "transparent",
                            fontSize: "52px",
                            color: "red",
                          }}
                        ></PlayArrowOutlinedIcon>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1 valign">
                <div className="cont">
                  <div className="flex mb-50">
                    <div>
                      <h4 className="fz-70 fw-400 line-height-1 text-white">
                        100+
                      </h4>
                    </div>
                    <div className="text ml-30">
                      <h6 className="mb-15 text-white">Projects Complete</h6>
                      <p>
                        Natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div>
                      <h4 className="fz-70 fw-400 line-height-1 text-white">
                        2180
                      </h4>
                    </div>
                    <div className="text ml-30">
                      <h6 className="mb-15 text-white">Creative Ideas</h6>
                      <p>
                        Natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-pattern2 opacity-1 bg-img"
            data-background="assets/img/pattern4.png"
          ></div>
        </section>

        {/* <!-- ==================== End intro ==================== --> */}
        {/* <!-- ==================== Start Teams ==================== --> */}

        <section className="teams section-padding">
          <div className="container-xxl">
            <div className="row">
              <div className="col-lg-7">
                <div className="sec-head mb-80">
                  <h3 className="fw-800 fz-28">
                    <span className="stroke main-color text-white">Our</span>
                    &nbsp; <span className="text-white">Works .</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="container-xxl">
            <div className="row max-margin">
              <div className="col-lg-4 lg-marg mt-10">
                <div className="item">
                  <div className="img">
                    <img src={Team1} alt="" />
                  </div>
                  <div className="info mt-30">
                    <h6 className="text-white">Morgan Fremain</h6>
                    <span className="sub-title mb-0 mt-10 opacity-7 text-white">
                      ART Designer
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 lg-marg mt-50">
                <div className="item md-mb50">
                  <div className="img">
                    <img src={Team2} alt="" />
                  </div>
                  <div className="info mt-30">
                    <h6 className="text-white">Morgan Fremain</h6>
                    <span className="sub-title mb-0 mt-10 opacity-7 text-white">
                      ART Designer
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 lg-marg">
                <div className="item">
                  <div className="img">
                    <img src={Team3} alt="" />
                  </div>
                  <div className="info mt-30">
                    <h6 className="text-white">Morgan Fremain</h6>
                    <span className="sub-title mb-0 mt-10 opacity-7 text-white">
                      ART Designer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 
      <!-- ==================== End Teams ==================== --> */}
        <Testimonial></Testimonial>
        <ClientBrands></ClientBrands>
        {/* <!-- ==================== Start Call To Action ==================== --> */}

        <section className="call-action-simp section-padding bg-dark bord-thin-bottom o-hidden">
          <div className="container-xxl bord-box">
            <div className="row justify-content-center">
              <div className="col-12 o-hidden">
                <div className="main-marq lrg">
                  <div className="slide-har st1">
                    <div className="box">
                      <div className="item">
                        <h4>
                          <Link to="/contact">Get In Touch</Link>
                        </h4>
                      </div>
                      <div className="item">
                        <h4>
                          <Link to="">Say Hi !</Link>
                        </h4>
                      </div>
                      <div className="item">
                        <h4>
                          <Link to="/contact">Contact Us</Link>
                        </h4>
                      </div>
                      <div className="item">
                        <h4>
                          <Link to="">Work Together</Link>
                        </h4>
                      </div>
                      <div className="item">
                        <h4>
                          <Link to="/contact">Get In Touch</Link>
                        </h4>
                      </div>
                      <div className="item">
                        <h4>
                          <Link hretof="">Say Hi !</Link>
                        </h4>
                      </div>
                      <div className="item">
                        <h4>
                          <Link to="/contact">Contact Us</Link>
                        </h4>
                      </div>
                    </div>
                    <div className="box">
                      <div className="item">
                        <h4>
                          <Link to="/contactl">Get In Touch</Link>
                        </h4>
                      </div>
                      <div className="item">
                        <h4>
                          <Link to="">Say Hi !</Link>
                        </h4>
                      </div>
                      <div className="item">
                        <h4>
                          <Link to="/contact">Contact Us</Link>
                        </h4>
                      </div>
                      <div className="item">
                        <h4>
                          <Link to="">Work Together</Link>
                        </h4>
                      </div>
                      <div className="item">
                        <h4>
                          <Link to="/contact">Get In Touch</Link>
                        </h4>
                      </div>
                      <div className="item">
                        <h4>
                          <Link to="/contact">Say Hi !</Link>
                        </h4>
                      </div>
                      <div className="item">
                        <h4>
                          <Link to="/contact">Contact Us</Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 
      <!-- ==================== End Call To Action ==================== --> */}
      </main>
      <Footer></Footer>
    </>
  );
}
