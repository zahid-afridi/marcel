import React from "react";
import Tema1 from "../assets/img/team/t1.jpg";
import Tema2 from "../assets/img/team/t2.jpg";
import Tema3 from "../assets/img/team/t3.jpg";
import Tema4 from "../assets/img/team/t4.jpg";
export default function OurTeam() {
  return (
    <>
      <section className="section-padding">
        <div className="container">
          <div className="sec-head mb-80">
            <div className="row">
              <div className="col-lg-9">
                <h6 className="sub-title main-color">Our Team</h6>
                <h3>World-className designers and developers.</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="item md-mb50">
                <div className="img">
                  <img src={Tema1} alt="" />
                </div>
                <div className="info text-center mt-30">
                  <h6>Morgan Fremain</h6>
                  <span className="sub-title mb-0 mt-10">ART Designer</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="item md-mb50">
                <div className="img">
                  <img src={Tema2} alt="" />
                </div>
                <div className="info text-center mt-30">
                  <h6>Morgan Fremain</h6>
                  <span className="sub-title mb-0 mt-10">ART Designer</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="item">
                <div className="img">
                  <img src={Tema3} alt="" />
                </div>
                <div className="info text-center mt-30">
                  <h6>Morgan Fremain</h6>
                  <span className="sub-title mb-0 mt-10">ART Designer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
