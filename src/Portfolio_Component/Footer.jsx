import React from "react";
import Logo from "../assets/myimg/Emblem (1).png";
export default function Footer() {
  return (
    <>
      <footer className="main-footer sub-bg text-white">
        <div className="container-xxl pt-80 pb-80">
          <div className="row">
            <div className="col-lg-2 col-md-6">
              <div className="clumn md-mb50">
                <div className="logo">
                  <a href="#0">
                    <img src={Logo} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="clumn md-mb50">
                <h5 className="title fw-600 fz-20 mb-30">About Us</h5>
                <ul className="cmp-links">
                  <li className="mb-10">
                    <a href="pg-about-us2.html">Company</a>
                  </li>
                  <li className="mb-10">
                    <a href="pg-our-team.html">Team</a>
                  </li>
                  <li className="mb-10">
                    <a href="pg-services2.html">Services</a>
                  </li>
                  <li className="mb-10">
                    <a href="portfolio-grid-4col.html">Products</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="clumn sm-mb50">
                <h5 className="title fw-600 fz-20 mb-30">Office</h5>
                <ul className="address">
                  <li className="adrs mb-15">
                    Germany — 785 15h Street, Office 478 Berlin, De 81566
                  </li>
                  <li className="eml underline mb-15">
                    <a href="mailto:example@website.com">
                      Info-Support@Gmail.com
                    </a>
                  </li>
                  <li className="tel">
                    <h6>+1 840 841 25 69</h6>
                  </li>
                </ul>
              </div>
            </div>
           
          </div>
        </div>

        <div className="sub-footer pb-50 pt-50 bord-thin-top">
          <div className="container-xxl">
            <div className="row">
              <div className="col-lg-6">
                <div className="horizontal-link fz-13">
                  <ul className="rest">
                    <li className="mr-30">
                      <a href="pg-mission.html">Privacy policy</a>
                    </li>
                    <li className="mr-30">
                      <a href="pg-mission.html">Legal notice</a>
                    </li>
                    <li>
                      <a href="pg-mission.html">Terms of service</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="copyrights d-flex justify-content-end">
                  <p className="fz-13" style={{ font: "Poppins', sans-serif" }}>
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
