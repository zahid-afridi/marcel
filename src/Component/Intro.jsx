import React from "react";
import PatternImg from "../assets/img/pattern3.png";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
export default function Intro() {
  const playVideo = () => {
    // Function to open the video in a new tab/window
    window.open("https://www.youtube.com/watch?v=3QunmtAWM3k", "_blank");
  };

  return (
    <>
      <section className="hero-sipm pt-80 pb-80 bg-dark position-relative">
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-6 valign">
              <div className="text">
                <h6 className="sub-title main-color">Our Story</h6>
                <h3>We are a new digital product development agency.</h3>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1 d-flex justify-content-center">
              <div className="vid-show">
                <div className="rotate-circle fz-30 text-u">
                  <svg className="textcircle" viewBox="0 0 500 500">
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
                <div className="" style={{ backgroundColor: "transparent" }}>
                  <button
                    className="vid"
                    onClick={playVideo}
                    style={{ backgroundColor: "transparent" }}
                  >
                    <PlayArrowOutlinedIcon
                      sx={{
                        backgroundColor: "transparent",
                        fontSize: "32px",
                        color: "white",
                      }}
                    ></PlayArrowOutlinedIcon>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-pattern2 bg-img opacity-2"
          data-background={PatternImg}
        ></div>
      </section>
    </>
  );
}
