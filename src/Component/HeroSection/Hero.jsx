import React from "react";
import WaveAnimation from "../WaveAnimation";

export default function Hero() {
  const handleCircleBoardClick = () => {
    // Scroll down smoothly by 100px
    window.scrollTo({
      top: window.scrollY + 500,
      behavior: "smooth",
    });
  };

  return (
    <>
      <header
        className="slide-creative position-re full-height valign"
        style={{ background: "black" }}
      >
        <div className="container-xxl ontop">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-11">
              <div className="caption text-center">
                <h1
                  className="fw-500 mb-30"
                  style={{ color: "white", fontFamily: "'Syne', sans-serif" }}
                >
                  We build immersive digital experiences.
                </h1>
                <div
                  className="circle-bord"
                  data-scroll-nav="0"
                  onClick={handleCircleBoardClick}
                  style={{ cursor: "pointer" }}
                >
                  <span className="loader-circle"></span>
                  <span className="loader-circle"></span>
                  <div className="arow-down carrow">
                    <svg>
                      <path d="M53.824 11.532a.5.5 0 01.352.936c-5.228 1.96-9.475 5.555-12.752 10.797a.5.5 0 01-.848-.53c3.39-5.424 7.81-9.163 13.248-11.203z"></path>
                      <path d="M53.824 12.468a.5.5 0 00.352-.936C48.948 9.572 44.7 5.978 41.424.735a.5.5 0 00-.848.53c3.39 5.424 7.81 9.163 13.248 11.203z"></path>
                      <path d="M54 12.5a.5.5 0 100-1H1a.5.5 0 100 1h53z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="home_wave">
          <WaveAnimation></WaveAnimation>
        </div>
      </header>
    </>
  );
}
