import React from "react";
import FoterLogo from "../assets/myimg/Emblem (1).png";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <footer className="crv-footer section-padding pb-0 bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="cal md-mb50">
                <h3>
                  We develop digital future​.
                  <span className="mt-10 l-block">
                    <a href="pg-contact2.html">
                      <span className="main-color">Contact us</span>.
                    </a>
                  </span>
                </h3>
              </div>
            </div>
            <div className="col-lg-5 d-flex align-items-end">
              <div className="subs full-width">
                <form action="contact.php">
                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="Your Email"
                      name="email_subscribe"
                    />
                    <button type="submit" className="sub-title mb-0">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="sub-footer pb-50 pt-50 mt-80 sub-bg ">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="horizontal-link fz-13">
                  <ul className="rest">
                    <li className="mr-50">
                      <div className="logo icon-img-70">
                        <a href="landing-preview.html">
                          <img src={FoterLogo} alt="" />
                        </a>
                      </div>
                    </li>
                    <li className="mr-30" style={{ color: "white" }}>
                      <a href="pg-mission.html">Privacy policy</a>
                    </li>
                    <li className="mr-30" style={{ color: "white" }}>
                      <a href="pg-mission.html">Legal notice</a>
                    </li>
                    <li style={{ color: "white" }}>
                      <a href="pg-mission.html">Terms of service</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 pt-2">
                <div className="copyrights full-width d-flex justify-content-end align-content-center">
                  <p className="fz-13" style={{fontFamily:" !important"}}>
                    © 2024 MarcelTech. All Rights Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
